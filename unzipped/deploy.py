import os
import shutil
import subprocess

# Paths relative to unzipped
dist_assets = os.path.join('dist', 'assets')
dist_index = os.path.join('dist', 'index.html')
dist_ads = os.path.join('dist', 'ads.html')

dest_assets = os.path.join('..', 'assets')
dest_index = os.path.join('..', 'index.html')
dest_app = os.path.join('..', 'app.html')
dest_ads = os.path.join('..', 'ads.html')

# Copy assets
os.makedirs(dest_assets, exist_ok=True)
for filename in os.listdir(dist_assets):
    src_file = os.path.join(dist_assets, filename)
    dst_file = os.path.join(dest_assets, filename)
    shutil.copy2(src_file, dst_file)
    print(f"Copied {filename}")

# Copy HTML files
shutil.copy2(dist_index, dest_index)
print("Copied index.html -> ../index.html")

shutil.copy2(dist_index, dest_app)
print("Copied index.html -> ../app.html")

shutil.copy2(dist_ads, dest_ads)
print("Copied ads.html -> ../ads.html")

# Run Vercel deploy
print("Triggering Vercel deployment...")
subprocess.run(['npx.cmd', 'vercel', '--prod', '--yes'], cwd='..', shell=True)
print("Deployment complete.")
