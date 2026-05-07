const { chromium } = require('C:\\Users\\Manuel\\Downloads\\10 SKILLS ADRI Y JUANPE\\kit-instagram-web\\node_modules\\playwright');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const HANDLE = 'valeriariveramindset';
const ASSETS_DIR = path.join(__dirname, 'assets', 'instagram');

if (!fs.existsSync(ASSETS_DIR)) fs.mkdirSync(ASSETS_DIR, { recursive: true });

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
      }
      res.pipe(file);
      file.on('finish', () => { file.close(); resolve(dest); });
    }).on('error', err => { fs.unlink(dest, () => {}); reject(err); });
  });
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    viewport: { width: 1280, height: 900 },
    locale: 'es-ES'
  });

  const page = await context.newPage();

  console.log('Navegando a Instagram: @' + HANDLE);
  await page.goto(`https://www.instagram.com/${HANDLE}/`, { waitUntil: 'networkidle', timeout: 30000 });

  try {
    const cookieBtn = await page.$('button:has-text("Aceptar"), button:has-text("Accept"), button:has-text("Allow")');
    if (cookieBtn) await cookieBtn.click();
    await page.waitForTimeout(1500);
  } catch (e) {}

  await page.waitForTimeout(3000);

  const metaData = await page.evaluate(() => {
    const getMeta = (prop) => {
      const el = document.querySelector(`meta[property="${prop}"], meta[name="${prop}"]`);
      return el ? el.getAttribute('content') : null;
    };
    return {
      title: getMeta('og:title'),
      description: getMeta('og:description'),
      image: getMeta('og:image'),
      url: getMeta('og:url'),
    };
  });

  console.log('Meta data:', JSON.stringify(metaData, null, 2));

  const pageData = await page.evaluate(() => {
    const scripts = Array.from(document.querySelectorAll('script[type="application/json"], script'));
    for (const s of scripts) {
      const t = s.textContent || '';
      if (t.includes('edge_followed_by') || t.includes('followers') || t.includes('biography')) {
        return t.substring(0, 10000);
      }
    }
    return null;
  });

  let followers = null, following = null, posts = null, bio = null, name = null;

  if (metaData.description) {
    const desc = metaData.description;
    const match = desc.match(/^([\d,\.KkMm]+)\s*(?:Followers?|Seguidores?),?\s*([\d,\.KkMm]+)\s*(?:Following|Seguidos?|Seguindo),?\s*([\d,\.KkMm]+)\s*(?:Posts?|Publicaciones?)\s*[–\-]\s*(.+)/i);
    if (match) {
      followers = match[1];
      following = match[2];
      posts = match[3];
      bio = match[4].trim();
    } else {
      bio = desc;
    }
  }

  if (metaData.title) {
    const titleMatch = metaData.title.match(/^(.+?)\s*[\(@]/);
    name = titleMatch ? titleMatch[1].trim() : metaData.title.replace(/Instagram.*/, '').trim();
  }

  if (pageData) {
    try {
      const followersMatch = pageData.match(/"edge_followed_by"\s*:\s*\{\s*"count"\s*:\s*(\d+)/);
      const followingMatch = pageData.match(/"edge_follow"\s*:\s*\{\s*"count"\s*:\s*(\d+)/);
      const postsMatch = pageData.match(/"edge_owner_to_timeline_media"\s*:\s*\{\s*"count"\s*:\s*(\d+)/);
      const bioMatch = pageData.match(/"biography"\s*:\s*"([^"]+)"/);
      const fullNameMatch = pageData.match(/"full_name"\s*:\s*"([^"]+)"/);

      if (followersMatch) followers = parseInt(followersMatch[1]).toLocaleString();
      if (followingMatch) following = parseInt(followingMatch[1]).toLocaleString();
      if (postsMatch) posts = parseInt(postsMatch[1]).toLocaleString();
      if (bioMatch) bio = bioMatch[1].replace(/\\n/g, '\n').replace(/\\u[\dA-F]{4}/gi, c => String.fromCharCode(parseInt(c.replace(/\\u/i, ''), 16)));
      if (fullNameMatch) name = fullNameMatch[1];
    } catch(e) {}
  }

  // Capture screenshot for reference
  await page.screenshot({ path: path.join(ASSETS_DIR, 'screenshot.png'), fullPage: false });
  console.log('Screenshot saved');

  const imageUrls = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs
      .map(img => ({ src: img.src, alt: img.alt, width: img.naturalWidth || img.width }))
      .filter(img => img.src && img.src.startsWith('http') && img.width > 100 && !img.src.includes('s150x150') && !img.src.includes('44x44'))
      .slice(0, 20);
  });

  console.log('Image URLs found:', imageUrls.length);

  let profilePhotoPath = null;
  if (metaData.image) {
    try {
      const dest = path.join(ASSETS_DIR, 'profile.jpg');
      await downloadFile(metaData.image, dest);
      profilePhotoPath = 'assets/instagram/profile.jpg';
      console.log('Profile photo downloaded');
    } catch(e) { console.log('Could not download profile photo:', e.message); }
  }

  const downloadedImages = [];
  let idx = 1;
  for (const img of imageUrls.slice(0, 12)) {
    try {
      const dest = path.join(ASSETS_DIR, `post-${idx}.jpg`);
      await downloadFile(img.src, dest);
      downloadedImages.push(`assets/instagram/post-${idx}.jpg`);
      idx++;
      if (idx > 9) break;
    } catch(e) {}
  }

  console.log('Downloaded images:', downloadedImages.length);

  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(2000);

  const moreImages = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('article img, main img'));
    return imgs
      .map(img => img.src)
      .filter(src => src && src.startsWith('http') && !src.includes('s150x150'));
  });

  for (const src of moreImages.slice(0, 6)) {
    if (downloadedImages.length >= 9) break;
    try {
      const dest = path.join(ASSETS_DIR, `post-${idx}.jpg`);
      await downloadFile(src, dest);
      downloadedImages.push(`assets/instagram/post-${idx}.jpg`);
      idx++;
    } catch(e) {}
  }

  await browser.close();

  const result = {
    handle: HANDLE,
    name: name || 'Valeria Rivera',
    bio: bio || '',
    followers: followers || '',
    following: following || '',
    posts: posts || '',
    profilePhoto: profilePhotoPath,
    postImages: downloadedImages,
    metaTitle: metaData.title,
    metaDescription: metaData.description,
  };

  fs.writeFileSync(path.join(__dirname, 'instagram-data.json'), JSON.stringify(result, null, 2));
  console.log('\n=== RESULTADO ===');
  console.log(JSON.stringify(result, null, 2));
})();
