		$('.map').maphilight();
		$(document).ready(function () {
			$(document).on('mousemove', function (e) {
				$('.title').css({
					left: e.pageX,
					top: e.pageY,
				});
			});
			$('.map-name').hover(
				function () {
					$('.title').show();
					$('.title').text($(this).attr('title'));
				},
				function () {
					$('.title').hide();
				}
			);
		});