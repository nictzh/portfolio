# Simple static file server for nicktoh-portfolio
# Usage: powershell -ExecutionPolicy Bypass -File serve.ps1

$port = 3000
$root = $PSScriptRoot
$prefix = "http://localhost:$port/"

$mime = @{
  '.html' = 'text/html; charset=utf-8'
  '.css'  = 'text/css; charset=utf-8'
  '.js'   = 'application/javascript; charset=utf-8'
  '.json' = 'application/json'
  '.ico'  = 'image/x-icon'
  '.png'  = 'image/png'
  '.jpg'  = 'image/jpeg'
  '.jpeg' = 'image/jpeg'
  '.webp' = 'image/webp'
  '.svg'  = 'image/svg+xml'
  '.gif'  = 'image/gif'
  '.woff2'= 'font/woff2'
  '.woff' = 'font/woff'
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()

Write-Host ""
Write-Host "  Portfolio server running at http://localhost:$port" -ForegroundColor Green
Write-Host "  Press Ctrl+C to stop." -ForegroundColor DarkGray
Write-Host ""

try {
  while ($listener.IsListening) {
    $ctx  = $listener.GetContext()
    $req  = $ctx.Request
    $resp = $ctx.Response

    $urlPath = $req.Url.LocalPath.TrimStart('/')
    if ($urlPath -eq '' -or $urlPath -eq '/') { $urlPath = 'index.html' }

    $filePath = Join-Path $root $urlPath

    # Directory index fallback
    if (Test-Path $filePath -PathType Container) {
      $filePath = Join-Path $filePath 'index.html'
    }

    if (Test-Path $filePath -PathType Leaf) {
      $ext  = [System.IO.Path]::GetExtension($filePath).ToLower()
      $ct   = if ($mime.ContainsKey($ext)) { $mime[$ext] } else { 'application/octet-stream' }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)

      $resp.ContentType   = $ct
      $resp.ContentLength64 = $bytes.Length
      $resp.StatusCode    = 200
      $resp.OutputStream.Write($bytes, 0, $bytes.Length)
      Write-Host "  200  $($req.Url.LocalPath)" -ForegroundColor DarkGray
    } else {
      $body  = [System.Text.Encoding]::UTF8.GetBytes("404 Not found: $urlPath")
      $resp.ContentType    = 'text/plain'
      $resp.ContentLength64 = $body.Length
      $resp.StatusCode     = 404
      $resp.OutputStream.Write($body, 0, $body.Length)
      Write-Host "  404  $($req.Url.LocalPath)" -ForegroundColor Yellow
    }

    $resp.OutputStream.Close()
  }
} finally {
  $listener.Stop()
  Write-Host "Server stopped." -ForegroundColor DarkGray
}
