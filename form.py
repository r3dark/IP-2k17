from pymongo import MongoClient
from flask import Flask,redirect,url_for,render_template,request

client = MongoClient('mongodb://localhost:27017/')
db = client.data
col = db.MY_table
app = Flask(__name__)

@app.route('/saksham_html/<name>')
def saksham_html(name):
	return render_template('saksham_.html',result = name)

@app.route('/')
def form():
	return render_template("saksham.html");
	
#@app.route('/send',methods = ['POST','GET'])
#def send():
#	if request.method == 'POST':
#		user = request.form['nm']
#		return redirect(url_for('saksham_html'))

@app.route('/data',methods = ['POST','GET'])
def result():
	if request.method == 'POST':
		username = request.form['name']
		text = request.form["note"]
		col.insert_one({"user":username,"Note":text})
		result = list(col.find({"user":"Saksham123"}))
		print result
		return redirect(url_for('saksham_html',name = result))
		
if __name__  == '__main__':
	app.run(debug = True)
