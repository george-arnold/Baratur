		$('.map').maphilight();
		console.log('connected');
		$(document).ready(function () {
			$(document).on('mousemove', function (e) {
				console.log('1');
				$('.title').css({
					left: e.pageX,
					top: e.pageY,
				});
			});
			$('.map-name').hover(
				function () {
					console.log('functional');
					$('.title').show();
					$('.title').text($(this).attr('title'));
				},
				function () {
					$('.title').hide();
				}
			);
		});