function chatbot() {
	
	// current user input
	this.input;
	
	/**
	 * respondTo
	 * 
	 * return nothing to skip response
	 * return string for one response
	 * return array of strings for multiple responses
	 * 
	 * @param input - input chat string
	 * @return reply of chat-bot
	 */
	this.respondTo = function(input) {
	
		this.input = input.toLowerCase();
		
		if(this.match('(كيف حالك|وشراك|راك لباس|اخبارك|راك غاية|راك مليح|هل انت بخير)(\\s|!|\\.|$)'))
			return "انا بخير شكرا انك تسأل علي";
		
		
		if(this.match('(نيك |زب|سكس|عطاي|سبي|قلاوي|نقش)(\\s|!|\\.|$)'))
			return "استغفر الله واتوب اليه انت شخص احمق";
		
		if(this.match('(فيسبوك بصور|بصور|لايت|GMC|fb wiki|صور|رؤية صور)(\\s|!|\\.|$)'))
			return "ادخل على هذا رابط تجبد الشرح اتبع من 1 حتى 10 وانشاء الله تنجح معك https://free.facebook.com/groups/423084828219119?view=permalink&id=437440433450225";
	
		if(this.match('(بومفتاح|مفتاح|مفتي عبد قادر||||)(\\s|!|\\.|$)'))
			return "ههههههههههههه هل انت بومفتاح ربوت شخصيا راح ينتحر ";
		
		if(this.match('(wiki لا يعمل)(\\s|!|\\.|$)'))
			return "ادخل على صفحة اسامة للمعولميات تجد جوابك";
		
		if(this.match('(ouss king|wiki ouss king|youtube|يوتيوب|فيديو|مشاهدة فيديو|يوتيب)(\\s|!|\\.|$)'))
			return "قريبا انشاء الله ارجو منكم الصبر وسيتم تبديل اسم الى ouss king";
		
		if(this.input == 'noop')
			return;
		
		return input + "انا لا افهمك ";
	}
	
	/**
	 * match
	 * 
	 * @param regex - regex string to match
	 * @return boolean - whether or not the input string matches the regex
	 */
	this.match = function(regex) {
	
		return new RegExp(regex).test(this.input);
	}
}
