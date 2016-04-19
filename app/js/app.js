'use strict'

var $ = require('jquery')

$(function () {
  var $app = $('#app')
  var $error = $('#error')
  var $filters = $('.buttons a')
  var $video = $('#video')

  navigator.webkitGetUserMedia({ video: true }, handleVideoStream, handleVideoError)

  function handleVideoError (error) {
    $error.find('code').text(error)
    $error.fadeIn('slow')
  }

  function handleVideoStream (stream) {
    $video.attr('src', window.URL.createObjectURL(stream))

    $filters.on('click', applyFilter)
    $app.fadeIn('slow')
  }

  function applyFilter (event) {
    event.preventDefault()

    var $currentLink = $(this)

    $filters.removeClass('active')
    $currentLink.addClass('active')
    $video.removeClass().addClass($currentLink.data('filter'))
  }
})
