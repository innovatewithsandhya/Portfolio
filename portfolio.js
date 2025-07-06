<script>
  const photos = document.querySelectorAll('.photo-shuffle img');
  let current = 0;

  function shufflePhotos() {
    photos.forEach((img, i) => {
      img.classList.remove('active', 'exit-left', 'exit-right');
      if (i === current) img.classList.add('active');
    });
    let next = (current + 1) % photos.length;

    setTimeout(() => {
      photos[current].classList.add('exit-left');
      photos[next].classList.add('active');
      current = next;
    }, 4000);
  }

  shufflePhotos();
  setInterval(shufflePhotos, 6000);
</script>
