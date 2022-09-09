/* Magic Mirror
 * Module: MMM-DailyReminders
 *
 * By Chris Wells
 * Apache-2 Licensed
 */

Module.register("MMM-DailyReminders", {
  // Default module config.
  defaults: {
    text: "Hello World!",
  },

  // Override dom generator.
  getDom: function () {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
    return wrapper;
  },
});

