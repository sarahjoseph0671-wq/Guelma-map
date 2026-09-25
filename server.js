import http from 'node:http';
import { readFile } from 'node:fs/promises';
const page = await readFile(new URL('./index.html', import.meta.url));
http.createServer((req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  if (path === '/health') { res.writeHead(200, {'Content-Type':'text/plain'}); return res.end('ok'); }
  if (path !== '/') { res.writeHead(404); return res.end('Not found'); }
  res.writeHead(200, {'Content-Type':'text/html; charset=utf-8','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});
  res.end(page);
}).listen(Number(process.env.PORT || 3000), '0.0.0.0');
