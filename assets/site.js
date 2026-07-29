document.querySelectorAll('.day-tab').forEach(function(tab){
  tab.addEventListener('click', function(){
    document.querySelectorAll('.day-tab').forEach(function(t){t.classList.remove('active');});
    document.querySelectorAll('.itin-plan').forEach(function(p){p.classList.remove('active');});
    tab.classList.add('active');
    document.getElementById(tab.dataset.target).classList.add('active');
  });
});
