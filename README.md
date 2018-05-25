# Emoji to Image 👩‍🎨 - Zeplin Extension ⚗️
Turns your emoji strings into downloadable images.

### Sample Output 📤
Outputs a JSON with blob urls that contains the image file.

### Usage
Sadly, this extension uses [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/OffscreenCanvas) which has only experimental support
in major browsers. I've developed it in Chrome 66.0.3359.181 and it has this feature with experimental flag and you need to activate it from `chrome://flags/` by enabling `Experimental canvas features` and `Experimental Web Platform features`.

Then, you can use this extension with these steps:
* Clone the repo
* `cd` into it.
* run `npm run start`
* Open Zeplin and add this extension as local.
For adding an extension as local, you can follow this [Adding a local extension](https://github.com/zeplin/zeplin-extension-documentation/blob/master/tutorial.md#adding-a-local-extension)

### Development 💻
Emoji to Image is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create and test extensions.

To learn more about zem, [see documentation](https://github.com/zeplin/zem).
