// storing variables that we‘ll use in the project
let pageNumber = 0
const nextTag = document.querySelector('footer img.next')
const prevTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// content for the pages that we can change
const pages = [
  {copy: 'a Switzerland based frontend developer', background: '#edc769', circle: '#FF6B6B'},
  {
    copy: 'passionate about visual design',
    background: 'rgba(161, 255, 254, 0.7)',
    circle: '#FFBF81'
  },
  {copy: 'looking for a new professional challenge', background: '#d3c7f3', circle: '#f7fe00'},
  {
    copy: `sharing her projects <a href="https://github.com/brigittavarga" class="github-link">on GitHub</a>`,
    background: '#faffb8',
    circle: '#EAF0CE'
  }
]

// make a next function to increase the page number
const next = function() {
  pageNumber = pageNumber + 1
  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  updateSection()
}

// make a previous function to decrease the page number
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

//pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}

// this will update the section‘s content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
}

// when click on nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

// when click on prevTag, run this
prevTag.addEventListener('click', function() {
  previous()
})

// when click on randomTag, run this
randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key check for arrow left or right
// and do next or prev correctly
document.addEventListener('keyup', function(event) {
  console.log(event)
  // if the key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }
  // if the key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    previous()
  }
})
