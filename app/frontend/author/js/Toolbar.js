import conf from "./Configuration"


export default class Toolbar {

  constructor(app, view, elementId, permissions) {
    this.html = $(elementId)
    this.app = app
    this.view = view

    /////////////////////////////////////////////
    // File Operations
    //
    this.openButton = $("#fileOpen")
    this.openButton.on("click", () => {
      this.openButton.tooltip("hide")
      app.fileOpen()
    })
    Mousetrap.bindGlobal("ctrl+o", () => {
      this.openButton.click()
      return false
    })


    this.saveButton = $("#fileSave")
    this.saveButton.on("click", () => {
      this.saveButton.tooltip("hide")
      app.fileSave()
    })
    Mousetrap.bindGlobal("ctrl+s", (event) => {
      this.saveButton.click()
      return false
    })


    /////////////////////////////////////////////
    // Editor Operations
    //
    this.addTextButton = $("#addTextSection")
    this.addTextButton.on("click", () => {
      this.addTextButton.tooltip("hide")
      this.view.addMarkdown()
    })
    Mousetrap.bindGlobal("ctrl+t", () => {
      this.addTextButton.click()
      return false
    })


    this.addBrainButton = $("#addBrainSection")
    this.addBrainButton.on("click", () => {
      this.addBrainButton.tooltip("hide")
      this.view.addBrain()
    })
    Mousetrap.bindGlobal("ctrl+s", (event) => {
      this.addBrainButton.click()
      return false
    })


    // enable the tooltip for all buttons
    //
    $('*[data-toggle="tooltip"]').tooltip({
      placement: "bottom",
      container: "body",
      delay: {show: 1000, hide: 10},
      html: true
    })

  }

}