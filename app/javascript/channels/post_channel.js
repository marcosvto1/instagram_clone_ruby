import consumer from "./consumer"

consumer.subscriptions.create("PostChannel", {
  connected() {
    console.log("entrou em connected")
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received({ post_created }) {
    // Called when there's incoming data on the websocket for this channel
    const template = document.createElement("div")

    template.innerHTML = post_created;

    console.log(template);

    const posts = document.querySelector(".posts");
    console.log(posts);
   // console.log(template.content.firstChild);
    posts.prepend(template);
  }
});
