const contentBox = document.getElementById("content-box");
const nextBtn = document.getElementById("next-btn");

nextBtn.addEventListener("click", showLetter);

// Step 2: Show letter image with buttons
function showLetter() {
  contentBox.innerHTML = `
    <img src="letter_pixel.gif" alt="Letter">
    <h3>Do you want to open it hazel? ૮ - ﻌ • ა</h3>
    <div>
      <button onclick="openLetter()">Open it!</button>
      <button onclick="declineLetter()">No, i hate u</button>
    </div>
  `;
}

// Step 3: When user clicks Open it
function openLetter() {
  contentBox.innerHTML = `
    <video id="loveVideo" autoplay loop muted playsinline style="width: 250px; border-radius: 10px; margin-bottom: 15px;">
      <source src="povhazel.mp4" type="video/mp4">
    </video>
    <p>Happy girlfriend day hazellll, we’ve been together for a little over a month, thank youuu for always accompanying meeee watching anime and listening to me yap, 
    also not getting icked out whenever I do disgusting stuff HEHEHHEHE, I really wish I could be with you today and give you flowers in person even though ik ur not
    a fan of them.. there are days where we ran out of things to talk about, but thank you for just being there, even just sitting in silence is fine with me,
    when you're tired I don't mind to just be a shoulder for you to lay on, you don't always have to be happy around me or energetic, I love all versions of you hazel.</p>
    <p>
    <br>
    I really am grateful to have you as my girlfriend, you're one of the bravest women I know, and honest to yourself, I always say that I'm proud of you,
    well that's because I really ammmm, and I hope you always remember to give credit to yourself, thank you for introducing me to new places, foods, and experiences. You bring colors into my life, ones that I haven't
    seen in myself before.</p>
    <br>
    <h2>P.S. I Love You .𖥔 ݁ ˖𓂃.☘︎ ݁˖</h2>
  `;

  const vid = document.getElementById("loveVideo");
    vid.muted = false;     
  vid.play().catch(err => console.log("Autoplay blocked:", err));
}

// Step 4: When user clicks No
function declineLetter() {
  contentBox.innerHTML = `
    <h1>💔 Ishhh oh okay gt ya</h1>
    <p>Dont talk to me im mad at u, jk ill never be mad at uuuuu, I LOVE YOUUU SO MUCH ♡</p>
    <div>
      <button onclick="showLetter()">Again..?</button>
    </div>
  `;
}
