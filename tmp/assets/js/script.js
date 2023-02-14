						  <script>
$('.Show').click(function() {
    $('#profit-calculator').show(500);
    $('.Show').hide(0);
    $('.Hide').show(0);
});
$('.Hide').click(function() {
    $('#profit-calculator').hide(500);
    $('.Show').show(0);
    $('.Hide').hide(0);
});
$('.toggle').click(function() {
    $('#profit-calculator').toggle('slow');
});
		</script>
		<script>
  function decrement(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value--;
    target.value = value;
  }

  function increment(e) {
    const btn = e.target.parentNode.parentElement.querySelector(
      'button[data-action="decrement"]'
    );
    const target = btn.nextElementSibling;
    let value = Number(target.value);
    value++;
    target.value = value;
  }

  const decrementButtons = document.querySelectorAll(
    `button[data-action="decrement"]`
  );

  const incrementButtons = document.querySelectorAll(
    `button[data-action="increment"]`
  );

  decrementButtons.forEach(btn => {
    btn.addEventListener("click", decrement);
  });

  incrementButtons.forEach(btn => {
    btn.addEventListener("click", increment);
  });
</script><script>
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
</script>
						  <!--script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-184223111-1"></script>
						  <script src="/js/google-tracking.js"></script-->
						  <li ><a href="/account"><i class="fa fa-pie-chart" aria-hidden="true"></i> Dashboard</a></li>
						  