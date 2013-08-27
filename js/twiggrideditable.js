(function($){

	$.fn.twiggrideditable = function(){
		$.each(this, function(){
			var _self = $(this), 
				_data = _self.prop('tagName').toLowerCase() == 'textarea' ? _self.val() : _self.text(),
				_cnt = $('<div></div>').insertAfter(_self),
				_ht;

		    // Empty element - inital table
			if($.trim(_data) == '') _data = '[[""]]';
			try{
				_data = JSON.parse(_data);
			}catch(e){
				return;
			}

			_self.hide();
			_cnt.handsontable({
 				data: _data,
 				startRows: 15,
 				startCols: 16,
 				rowHeaders: false,
 				colHeaders: false,
 				minSpareCols: 1,
 				minSpareRows: 1,
 				contextMenu: true,
 				outsideClickDeselects: true
			});

			_ht = _cnt.handsontable('getInstance');

			function updateContainer(){
				var _r = _ht.countRows(), _c = _ht.countCols(),
					_d = _r == 1 && _c == 1 ? "[]" : JSON.stringify(_ht.getData(0, 0, _r-2, _c-2));
				if(_self.prop('tagName').toLowerCase() == 'textarea') _self.val(_d);
				else _self.text(_d);	
			}

			_ht.addHook('afterChange', updateContainer);
			_ht.addHook('afterRemoveRow', updateContainer);
			_ht.addHook('afterRemoveCol', updateContainer)
		});
	}

})(jQuery)