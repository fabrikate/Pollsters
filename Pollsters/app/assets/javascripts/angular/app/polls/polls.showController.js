(function() {
  'use strict';

  angular
  .module('app.polls')
  .controller('showController', showController);

  showController.$inject = ['PollFactory', 'OptionFactory', '$http', '$routeParams'];

  function showController ( PollFactory, OptionFactory, $http, $routeParams) {
    var vm = this;
    vm.sum = 0;

    $http.get('http://localhost:3000/api/polls/' + $routeParams.poll_id).then(function(data) {
      vm.showPoll = data.data.poll;
      vm.pollLabels = [];
      vm.pollData = [];

      vm.showPoll.options.forEach(function(item) {
        vm.pollLabels.push(item.answer);
        vm.pollData.push(item.vote)
      })
      console.log(vm.pollData);
      vm.pollData.forEach(function(item) {
        vm.sum += item;
      })
    })
    vm.selected = '';

    vm.saveID = function() {
      var handle = vm.twitterHandle || 'PollstersCo'
      vm.source = "https://twitter.com/intent/tweet?screen_name=" + handle + "&text=Check%20out%20the%20results%20of%20this%20poll"
      $('.twitter-mention-button').attr('href', vm.source)
      console.log('source is, ', vm.source)
      console.log('twiiter name is ', vm.twitterHandle);
    }
  }

})();
