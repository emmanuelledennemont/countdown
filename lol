<div class="buttons-counter">
        <button type "button" class="timer__part button">Start</button>
        <button type "button" class="timer__part button">Stop</button>
        <button type "button" class="timer__part button">Reset</button>
      </div>

      overflow: hidden;



.anim {
  width: 246px;
  text-align: center;
  margin: 0 auto;
  font-family: "Mouse Memoirs", sans-serif !important;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  padding-top: 1rem;
  text-transform: uppercase;
  padding: 1rem;
}

.anim .text {
  position: relative;
}
.anim .text.first-text {
  color: #fff;
}
.text.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--secondary-color) !important;
  border-left: 2px solid var(--primary-color) !important;
  animation: animate 4s steps(12) infinite;
}
body.dark .text.sec-text:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgb(56, 56, 56) !important;
  border-left: 2px solid #adb213 !important;
  animation: animate 4s steps(12) infinite;
}