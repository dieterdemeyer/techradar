var radar_data = [
{"name": "Continuous Delivery", "pc":{"r":30,"t":125},"movement":"t"},
{"name": "DevOps", "pc":{"r":65,"t":115},"movement":"t"},
{"name": "Agile Practices", "pc":{"r":55,"t":140},"movement":"t"},
{"name": "Kanban", "pc":{"r":75,"t":150},"movement":"t"},
{"name": "Infrastructure as Code", "pc":{"r":85,"t":175},"movement":"t"},

{"name": "Git", "pc":{"r":80,"t":60},"movement":"t"},
{"name": "GitHub", "pc":{"r":80,"t":80},"movement":"t"},
{"name": "JeOS", "pc":{"r":25,"t":60},"movement":"t"},
{"name": "Puppet", "pc":{"r":90,"t":30},"movement":"t"},
{"name": "MCollective", "pc":{"r":80,"t":10},"movement":"t"},
{"name": "Jenkins", "pc":{"r":70,"t":20},"movement":"t"},
{"name": "Vagrant", "pc":{"r":65,"t":50},"movement":"t"},
{"name": "Virtualbox", "pc":{"r":50,"t":30},"movement":"t"},
{"name": "FPM", "pc":{"r":60,"t":70},"movement":"t"},
{"name": "Foreman", "pc":{"r":45,"t":80},"movement":"t"},
{"name": "Puppet Dashboard", "pc":{"r":70,"t":35},"movement":"t"},
{"name": "Graphite", "pc":{"r":140,"t":75},"movement":"t"},
{"name": "Graphene", "pc":{"r":130,"t":50},"movement":"t"},
{"name": "Logstash", "pc":{"r":150,"t":60},"movement":"t"},
{"name": "Kibana", "pc":{"r":170,"t":40},"movement":"t"},

{"name": "RedHat", "pc":{"r":50,"t":200},"movement":"t"},
{"name": "CentOS", "pc":{"r":70,"t":220},"movement":"t"},
{"name": "VMWare", "pc":{"r":90,"t":250},"movement":"t"},
{"name": "KVM", "pc":{"r":150,"t":225},"movement":"t"},
{"name": "Cloudstack", "pc":{"r":250,"t":225},"movement":"t"},
{"name": "Openstack", "pc":{"r":250,"t":245},"movement":"t"},

{"name": "Ruby", "pc":{"r":50,"t":290},"movement":"t"},
{"name": "Puppet", "pc":{"r":70,"t":300},"movement":"t"},
{"name": "Python", "pc":{"r":90,"t":280},"movement":"t"},


];

//left to right -> top to bottom
var radar_quadrants = [
{"name":"Techniques", "start":0, "end":5},
{"name":"Tools", "start":5, "end":20},
{"name":"Platforms", "start":20, "end":26},
{"name":"Languages", "start":26, "end":29}
];
//
var radar_arcs = [{'r':100,'name':'Adopt'},{'r':200,'name':'Trial'},{'r':300,'name':'Assess'},{'r':400,'name':'Hold'}];

var radar_title = "Cegeka Codex Technology Radar (Aug 2012)";
