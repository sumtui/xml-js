/*global describe,it,expect,beforeEach,afterEach*/

var convert = require('../lib');
var testItems = require('./test-items');

describe('Testing xml2js.js:', function () {
    'use strict';

    //var books = require('fs').readFileSync('test/fixtures/books.xml');

    /*describe('No options supplied (fallback to defaults):', function () {

        var options = {};
        testItems(options).forEach(function (test) {
            it(test.desc, function () {
                expect(convert.xml2js(test.xml, options)).toEqual(test.js);
            });
        });

    });*/

    describe('No options supplied (fallback to defaults):', function () {

        var options = {};
        testItems(options).forEach(function (test) {
            it(test.desc, function () {
                expect(convert.xml2js(test.xml, options)).toEqual(test.js);
            });
        });

    });

    describe('options = {compact: false}', function () {

        describe('Options set to default values explicitly:', function () {

            var options = {singleLine: false, compact: false, trim: false, sanitize: false, nativeType: false, alwaysChildren: false, addParent: false};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false}', function () {

            var options = {compact: false};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false, trim: true}', function () {

            var options = {compact: false, trim: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false, sanitize: true}', function () {

            var options = {compact: false, sanitize: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false, nativeType: true}', function () {

            var options = {compact: false, nativeType: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false, alwaysChildren: true}', function () {

            var options = {compact: false, alwaysChildren: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: false, addParent: true}', function () {

            var options = {compact: false, addParent: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

    });

    describe('options = {compact: true}', function () {

        describe('Options set to default values explicitly:', function () {

            var options = {compact: true, trim: false, sanitize: false, nativeType: false, alwaysChildren: false, addParent: false};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: true}', function () {

            var options = {compact: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: true, trim: true}', function () {

            var options = {compact: true, trim: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: true, sanitize: true}', function () {

            var options = {compact: true, sanitize: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: true, alwaysArray: true}', function () {

            var options = {compact: true, alwaysArray: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {compact: true, addParent: true}', function () {

            var options = {compact: true, addParent: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

    });

    describe('Varying spaces', function () {

        describe('options = {}', function () {

            var options = {};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {spaces: true}', function () {

            var options = {spaces: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {spaces: 2}', function () {

            var options = {spaces: 2};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {spaces: 4}', function () {

            var options = {spaces: 4};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {spaces: \'  \'}', function () {

            var options = {spaces: '  '};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {spaces: \\t}', function () {

            var options = {spaces: '\t'};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

    });

    describe('Various options:', function () {

        describe('options = {trim: true}', function () {

            var options = {trim: true};
            testItems({trim: true}).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2js(test.xml, options)).toEqual(test.js);
                });
            });

        });

        describe('options = {nativeType: true}', function () {

            var options = {nativeType: true};

            it('Parse number', function () {
                expect(convert.xml2js('<a>123</a>', options)).toEqual({"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":123}]}]});
            });
            it('Parse true', function () {
                expect(convert.xml2js('<a>true</a>', options)).toEqual({"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":true}]}]});
            });
            it('Parse false', function () {
                expect(convert.xml2js('<a>false</a>', options)).toEqual({"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":false}]}]});
            });
            convert.xml2js('<a>x', {});
            /*it('Parse improper XML', function () {
                expect(convert.xml2js('<a>x', {})).toEqual({"elements":[{"type":"element","name":"a","elements":[{"type":"text","text":"x"}]}]});
            });*/

        });

    });

    describe('xml2json:', function () {

        describe('No options supplied (fallback to defaults):', function () {

            var options = {};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2json(test.xml, options)).toEqual(JSON.stringify(test.js));
                });
            });

        });

        describe('options = {compact: true, addParent: true}:', function () {

            var options = {onlyItem: 6, compact: true, addParent: true};
            testItems(options).forEach(function (test) {
                it(test.desc, function () {
                    expect(convert.xml2json(test.xml, options)).toBe(JSON.stringify(test.js, function (k, v) { return k === '_parent'? '_' : v; }));
                });
            });

        });

    });

    describe('User reported issues:', function () {

        describe('case by Mark Pareja', function () {
            // see https://github.com/nashwaan/xml-js/issues/3
            var xml = '<?xml version="1.0" encoding="utf-8"?>\n' +
                      '<dp:ListServicesReply ReturnCode="0" xmlns:dp="http://www.cisco.com/vtg/diagnosticportal">\n' +
                      '  <dp:Schema Version="1.0" />\n' +
                      '  <dp:ServiceList>\n' +
                      '    <dp:Service Name="Cisco ICM usgd1 LoggerA" Description="Provides Call Logging services for Instance usgd1" Status="Running" StartupType="Auto" LogOnAs="****" />\n' +
                      '    <dp:Service Name="Cisco ICM Diagnostic Framework" Description="Provides a web-based diagnostic service for Cisco Unified ICM, Contact Center Enterprise application." Status="Running" StartupType="Auto" LogOnAs="LocalSystem" />\n' +
                      '  </dp:ServiceList>\n' +
                      '</dp:ListServicesReply>';
            var json = {
                "_declaration": {
                    "_attributes": {
                        "version": "1.0",
                        "encoding": "utf-8"
                    }
                },
                "dp:ListServicesReply": {
                    "_attributes": {
                        "ReturnCode": "0",
                        "xmlns:dp": "http://www.cisco.com/vtg/diagnosticportal"
                    },
                    "dp:Schema": {
                        "_attributes": {
                            "Version": "1.0"
                        }
                    },
                    "dp:ServiceList": {
                        "dp:Service": [
                            {
                                "_attributes": {
                                    "Name": "Cisco ICM usgd1 LoggerA",
                                    "Description": "Provides Call Logging services for Instance usgd1",
                                    "Status": "Running",
                                    "StartupType": "Auto",
                                    "LogOnAs": "****"
                                }
                            },
                            {
                                "_attributes": {
                                    "Name": "Cisco ICM Diagnostic Framework",
                                    "Description": "Provides a web-based diagnostic service for Cisco Unified ICM, Contact Center Enterprise application.",
                                    "Status": "Running",
                                    "StartupType": "Auto",
                                    "LogOnAs": "LocalSystem"
                                }
                            }
                        ]
                    }
                }
            };

            it('should output as expected json', function () {
                expect(convert.xml2json(xml, {compact: true})).toEqual(JSON.stringify(json));
            });

        });

        describe('case by Félix Dion Robidoux', function () {
            // see https://github.com/nashwaan/xml-js/issues/6
            var xml = '<ZohoCreator>\n' +
                      '    <applicationslist>\n' +
                      '        <application name="testapp">\n' +
                      '            <formlist>\n' +
                      '                <form name="Untitled_Form">\n' +
                      '                    <add>\n' +
                      '                        <field name="Subform_Single_Line">\n' +
                      '                            <value>BEUHBALUGU</value>\n' +
                      '                        </field>\n' +
                      '                    </add>\n' +
                      '                </form>\n' +
                      '                <form name="Untitled_Form">\n' +
                      '                    <add>\n' +
                      '                        <field name="Subform_Single_Line">\n' +
                      '                            <value>IF YOU CAN SEE THIS YOU DESERVE THE SUCC</value>\n' +
                      '                        </field>\n' +
                      '                    </add>\n' +
                      '                </form>\n' +
                      '            </formlist>\n' +
                      '        </application>\n' +
                      '        <application name="derp">\n' +
                      '            <formlist></formlist>\n' +
                      '        </application>\n' +
                      '    </applicationslist>\n' +
                      '</ZohoCreator>';

            var json = convert.xml2json(xml, {compact: true, spaces: 4});

            it('should output json and reverse it back to xml', function () {
                expect(convert.json2xml(json, {compact: true, spaces: 4, fullTagEmptyElement: true})).toEqual(xml);
            });

        });

        describe('case by misitoth', function () {
            // see https://github.com/nashwaan/xml-js/issues/13
            var xml = '<!DOCTYPE svc_init SYSTEM "MLP_SVC_INIT_300.DTD" [<!ENTITY % extension SYSTEM "PIF_EXTENSION_100.DTD">%extension;]>';
            var json = {"_doctype" : "svc_init SYSTEM \"MLP_SVC_INIT_300.DTD\" [<!ENTITY % extension SYSTEM \"PIF_EXTENSION_100.DTD\">%extension;]"};

            it('should output as expected json', function () {
                expect(convert.xml2js(xml, {compact: true})).toEqual(json);
            });

        });

    });

});
