if [ -d $1 ]; then
	echo 'error: dir exist'
else
	mkdir $1
	cd $1
	mkdir css js
	touch index.html css/style.css js/main.js
	echo 'success'
	exit
fi
