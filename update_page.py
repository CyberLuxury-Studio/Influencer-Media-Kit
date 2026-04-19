import os

page_path = "src/app/page.tsx"
with open(page_path, "r") as f:
    content = f.read()

import_stmt = 'import { BrandCollabs } from "@/components/sections/brand-collabs";'
content = content.replace('import { ContentShowcase } from "@/components/sections/content-showcase";', 
                         import_stmt + '\nimport { ContentShowcase } from "@/components/sections/content-showcase";')

content = content.replace('<SocialStats />',
                         '<SocialStats />\n      <BrandCollabs />')

with open(page_path, "w") as f:
    f.write(content)
