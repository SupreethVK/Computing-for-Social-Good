from bs4 import BeautifulSoup, NavigableString
import pprint
import csv
import urllib


#def save_html(url, filename):
#	urllib.request.urlretrieve(url, filename)

def combine_address(b, s3, s1, s2, p):
	s = ""
	if b:
		s += b + ", "
	if s3:
		s += s3 + ", "
	if s1:
		s += s1 +", "
	if s2:
		s += s2 +", "
	if p:
		s += p
	return s

providers = []
with open("HTML/L-1.html", encoding="ISO-8859-1") as fp:
	soup = BeautifulSoup(fp, 'html.parser')
bigdiv = soup.find("div", class_="dataGridTableContant")
content = bigdiv.contents
print(len(content))

for provider in bigdiv:
	if isinstance(provider, NavigableString):
		continue
	details = {}

	#name
	names = provider.find_all("p", class_="pcpName")
	if len(names) > 0:
		c = names[0].next_sibling.contents[3].contents[1]
		details["name"] = c

	#adddress
	addresses_para = provider.find_all("p", class_ = "mobileFont14px customDisplayForAddress")
	if len(addresses_para):
		
		buildingname = addresses_para[0].contents[3].contents[2].contents[1].get_text()
		streetline3 = addresses_para[0].contents[3].contents[2].contents[5].get_text()
		streetline1 = addresses_para[0].contents[3].contents[2].contents[9].get_text()
		streetline2 = addresses_para[0].contents[3].contents[2].contents[13].get_text() 

		if streetline2:
			place = ' '.join(addresses_para[0].contents[3].contents[2].contents[18].split())
		else:
			place = ' '.join(addresses_para[0].contents[3].contents[2].contents[16].split())
		c = combine_address(buildingname, streetline3, streetline1, streetline2, place)
		#print ("-------------------------------------------")
		#print (details["name"])
		#print (c)
		details["address"] = c

	#phone and miles away
	phone_para = provider.find_all("p", class_ = "mobileMarT20")
	if len(phone_para)> 0:
		miles = phone_para[0].contents[5].get_text()
		#print(miles)
		details["milesaway"] = miles
		phone = phone_para[1].contents[6].get_text()
		#print(phone)
		details["phone"] = phone
		#print(phone_para[2])

	#specialities
	specs_para =  provider.find_all("p", class_ = "mobileFont14px")
	if len(specs_para) > 0:
		specs = " ".join (specs_para[3].get_text().split())
		specs = specs.split(":")[1].strip() 
		#print(specs) 
		details["specialities"] = specs

	providers.append(details)

'''
for p in providers:
	pprint.pprint(p)
'''

with open("Laboratories.csv", 'a+', newline='') as csv_file:
    writer = csv.writer(csv_file)
    for p in providers:
        if p:
            temp_list = []
            temp_list.append(p['name'])
            temp_list.append(p["address"])
            temp_list.append(p["phone"])
            temp_list.append(p['milesaway'])
            temp_list.append(p['specialities'])
            print(temp_list)
            writer.writerow(temp_list)

csv_file.close()
    

	
	



#providerResults > section:nth-child(7) > div.container.mobile-container.gridContainer.alignmentFix > div.dataGrid > div.dataGridTable.datGridSort.marT35Desk.clearfix > div.dataGridTableContant