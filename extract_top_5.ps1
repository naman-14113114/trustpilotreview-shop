Add-Type -AssemblyName System.IO.Compression.FileSystem
$zipPath = 'c:\Users\NAMAN KHARBANDA\OneDrive\Desktop\trustpilot\trustpilot-led-mask-replica\zip.zip'
$extractPath = 'c:\Users\NAMAN KHARBANDA\OneDrive\Desktop\trustpilot\trustpilot-led-mask-replica\top-5-led-mask\index.html'

$zip = [System.IO.Compression.ZipFile]::OpenRead($zipPath)
$entry = $zip.Entries | Where-Object { $_.FullName -like '*top-5-led-mask/index.html*' } | Select-Object -First 1

if ($entry) {
    [System.IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $extractPath, $true)
    Write-Output "Successfully extracted to $extractPath"
} else {
    Write-Output "Entry not found in zip!"
}
$zip.Dispose()
