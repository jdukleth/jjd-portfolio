<template>
  <div>
    <div id="StarsPerspective">
      <transition name="zoomies" enter-class="stars">
        <div class="stars" />
      </transition>
    </div>
    <div id="StarsOverlay" />
  </div>
</template>

<style lang="scss">
$stars: 375; // Number of stars per layer
$depth: 300; // Depth between star layers
$speed: 5s; // Number of seconds to transition between layers
$width: 3000; // Width of the starfield
$height: 1080; // Height of the starfield

html,
body {
  height: 100%;
  overflow: hidden;
}

#StarsPerspective {
  perspective: 340px;
}

#StarsOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

@keyframes zoomin {
  from {
    transform: translateZ(0px);
  }
  to {
    transform: translateZ($depth + px);
  }
}

@keyframes fade1 {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade2 {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

.stars {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2px;
  height: 2px;
  $box-shadow: ();
  @for $i from 0 through $stars {
    $box-shadow: $box-shadow,
      (random($width)-$width/2 + px)
        (random($height) + px)
        hsl(90, 0%, 75% + random(25%));
  }
  box-shadow: $box-shadow;
  animation: zoomin $speed linear infinite;
  transform-style: preserve-3d;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: inherit;
    height: inherit;
    box-shadow: inherit;
  }

  &:before {
    transform: translateZ(-$depth + px);
    animation: fade1 $speed linear infinite;
  }

  &:after {
    transform: translateZ(-$depth * 2 + px);
    animation: fade2 $speed linear infinite;
  }
}
</style>
