## Blur, sharpen, edge-detection, and convolution patches for Spark AR

https://en.wikipedia.org/wiki/Kernel_(image_processing)

![](./demo.gif)

All of the patches have a strength input, which can be controlled in the demo by clicking on the controller block and using the strength slider in the properties panel.

TIP! If you are using gaussian blur, a more performant option is to chain two directional blurs together (one horizontal, one vertical).

## Patches
Numbers in the patch names signify the size of the kernel that is used. Lower is better for performance, higher is better for quality.

### BlurDirectional3, BlurDirectional5
Blur that accepts a vector for directional blurring. Direction vector is normalized, so any range of numbers is acceptable

### Convolve3, Convolve5
General purpose convolution patches that are used as a base for the other patches.

### UnsharpMask5
Really good looking sharpening. Just wow. Great job.

### Sharpen3
Harsh sharpening, good for enhancing small details.

### BlurGaussian3, BlurGaussian5
Gaussian blur. You know the one.

### EdgeBox3
Boxy edge detector.

### EdgeCross3
Crossy edge detector.


## Edge detection tutorial (outdated)

[![tutorial](./tutorial.jpg)](https://www.youtube.com/watch?v=VbFEAbeGmQc)

## Resources

Learn more stuff by watching my [Spark AR Tutorials on YouTube!](https://www.youtube.com/playlist?list=PLAZp2Vi7Gfspzyla4RrCO6BzVzYW7Lnb-)

Follow me on Instagram [@positlabs](https://instagram.com/positlabs) and try out my effects!

Browse my open-source [Spark AR repositories on Github!](https://github.com/search?q=user%3Apositlabs+spark)

Have questions? Join the [Spark AR Community](https://www.facebook.com/groups/SparkARcommunity/) group on Facebook.


## Donations

If you used this in client projects, or simply enjoyed making effects with my open-source projects, please consider a donation or sponsorship. One-time donations can be made with PayPal. Subscriptions can be through PayPal or Github Sponsors (click the heart sponsor button at the top of the page).

[![](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=YGS69CHAE9EQC&source=url)
