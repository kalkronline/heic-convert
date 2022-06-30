const FILE = 'imgs/sample1.heic';

import sharp from 'sharp';
import { readFileSync } from 'fs';
import convert from 'heic-convert';

async function websafeToJpeg(file: Blob): Promise<Blob> {
    const buf = Buffer.from(await file.arrayBuffer());
    const jpg = await sharp(buf).jpeg().toBuffer();
    return new Blob([jpg]);
}

async function heicToJpeg(file: Blob): Promise<Blob> {
    const buf = Buffer.from(await file.arrayBuffer());
    const jpg: Buffer = await convert({
        buffer: buf,
        format: 'JPEG',
        quality: 1,
    })
    console.log(jpg)

    return new Blob([jpg])
}

const blob = new Blob([readFileSync(FILE)]);

let out: Blob;

// check type of img
if (true) // if avif type
    out = await websafeToJpeg(blob)
if (true) // if heic type
    out = await heicToJpeg(blob)

// continue