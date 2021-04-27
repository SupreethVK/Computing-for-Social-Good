from flask import Flask,request, jsonify
from flaskext.mysql import MySQL
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
mysql = MySQL()
app.config['MYSQL_DATABASE_USER'] = 'medmaps0_jaya'
app.config['MYSQL_DATABASE_PASSWORD'] = 'socialinnovator'
app.config['MYSQL_DATABASE_DB'] = 'medmaps0_socialgood'
app.config['MYSQL_DATABASE_HOST'] = '162.144.15.8'
mysql.init_app(app)


@app.route('/')
def index():
	return app.send_static_file('index.html')

@app.route('/urgentcare')
@app.route('/urgentcare/<name>')
def urg(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from urgentcare")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from urgentcare where name like %s", n)
		results = cursor.fetchall()
	cursor.execute("select * from prices where Category like %s", "UrgentCare")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]

	cursor.close()

	return jsonify(deets)

@app.route('/pharmacies')
@app.route('/pharmacies/<name>')
def phar(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from pharmacies")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from pharmacies where name like %s", n)
		results = cursor.fetchall()
	cursor.execute("select * from prices where Category like %s", "Pharmacy")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]
	cursor.close()

	return jsonify(deets)

@app.route('/laboratories')
@app.route('/laboratories/<name>')
def labs(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from laboratories")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from laboratories where name like %s", n)
		results = cursor.fetchall()
	cursor.execute("select * from prices where Category like %s", "Laboratories")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]
	cursor.close()

	return jsonify(deets)

@app.route('/behavioralprofessionals')
@app.route('/behavioralprofessionals/<name>')
def bahvprofs(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from behavioralprofessionals")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from behavioralprofessionals where name like %s", n)
		results = cursor.fetchall()
	
	cursor.execute("select * from prices where Category like %s", "MentalHealthProfessionals")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]
	cursor.close()

	return jsonify(deets)

@app.route('/hospitals')
@app.route('/hospitals/<name>')
def hosp(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from hospitals")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from hospitals where name like %s", n)
		results = cursor.fetchall()
	cursor.execute("select * from prices where Category like %s", "Hospitals")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]
	cursor.close()

	return jsonify(deets)

@app.route('/primarycareproviders')
@app.route('/primarycareproviders/<name>')
def pcp(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from primarycareproviders")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from primarycareproviders where name like %s", n)
		results = cursor.fetchall()
	cursor.execute("select * from prices where Category like %s", "PrimaryCareProviders")
	prices = cursor.fetchall()
	deets["data"] = results
	deets["SelectCareProviders"] = prices[0][1]
	deets["Innetwork"] = prices[0][2]
	deets["Outnetwork"] = prices[0][3]
	cursor.close()

	return jsonify(deets)

@app.route('/behavioraltelevideo')
@app.route('/behavioraltelevideo/<name>')
def behavtelevid(name = ''):
	conn = mysql.connect()
	cursor = conn.cursor()
	deets = {}
	results = []
	prices = []
	if name == '':
		cursor.execute("select * from behavioraltelevideo")
		results = cursor.fetchall()
	else:
		n = "%" + name + "%"
		cursor.execute("select * from behavioraltelevideo where provider like %s", n)
		results = cursor.fetchall()
	deets["data"] = results
	cursor.close()

	return jsonify(deets)

@app.route('/terminologies')
def terms():
	conn = mysql.connect()
	cursor = conn.cursor()
	reults = []
	deets = {}
	cursor.execute("select * from terminologies")
	results = cursor.fetchall()
	deets["data"] = results
	cursor.close()
	return jsonify(deets)

@app.route('/prices')
def categories():
	conn = mysql.connect()
	cursor = conn.cursor()
	reults = []
	deets = {}
	cursor.execute("select * from prices")
	results = cursor.fetchall()
	deets["data"] = results
	cursor.close()
	return jsonify(deets)


		
if __name__ == '__main__':
   app.run(debug = True)



