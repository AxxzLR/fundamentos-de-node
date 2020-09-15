const sharp=require('sharp')

sharp('./original.jpg')
    .resize(300)
    .grayscale()
    .toFile('resized.jpg')
