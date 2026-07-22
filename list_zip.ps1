Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = 'c:\Users\NAMAN KHARBANDA\OneDrive\Desktop\trustpilot\trustpilot-led-mask-replica\zip.zip'
$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$zip.Entries | Select-Object -ExpandProperty FullName
$zip.Dispose()
