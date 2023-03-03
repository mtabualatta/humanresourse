// Copyright (c) 2023, malek and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Attendance Script Report"] = {
	"filters": [
		{'fieldname': 'employee', 'label': 'Employee', 'fieldtype': 'Link', 'options': 'Employee'},
		{'fieldname': 'attendance_date', 'label': 'Attendance Date', 'fieldtype': 'Date'},

	]
};
