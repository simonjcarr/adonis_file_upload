'use strict'
const Helpers = use("Helpers");
class UploadController {
  async index({ view }) {
    return view.render("upload_files")
  }

  async upload({ request, view }) {
    const upload_file = request.file("upload_file", {
      size: "100mb",
    });

    await upload_file.move(Helpers.publicPath('uploads'), {
      overwrite: true
    })

    if (!upload_file.moved()) {
      console.log(upload_file.error())
      return view.render('upload_files', {status: 'Error: ' + upload_file.error()})
    }

    return view.render('upload_files', {status: 'File Uploaded'})
  }
}

module.exports = UploadController
