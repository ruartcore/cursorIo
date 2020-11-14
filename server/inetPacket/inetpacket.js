module.exports = class ePack{
	  getEvent(ev){
		 switch(ev){
			
			  case 1:{
				   return 'EVENT_CLICK_LEFT';
				}
				case 2:{
					return 'EVENT_CLICK_MIDDLE';
					}
				case 3:{
					return 'EVENT_CLICK_RIGHT';
					}
				case 0:{
					return 'EVENT_DRAG';
					}
					case 4:{
					return 'EVENT_NONE';
					}
				default:{
					 return 'EVENT_NONE';
					}
			}
		}
		getRevEvent(ev){
		 switch(ev){
			
			  case 'EVENT_CLICK_LEFT':{
				   return 1;
				}
				case 'EVENT_CLICK_MIDDLE':{
					return 2;
					}
				case 'EVENT_CLICK_RIGHT':{
					return 3;
					}
				case 'EVENT_DRAG':{
					return 0;
					}
				default:{
					 return 4;
					}
			}
		}
	  toJson(data){
		  return {
			hash: data[0],
		     x: data[1],
		     y: data[2],     
		     event:  data[3]
		  };
		}
		toByte(data){
			if(data.hash){
				return [
			data.hash,
			data.x,
			data.y,
		    data.event
			];
				}
			return [
			data.x,
			data.y,
		    data.event
			];
		}
	};