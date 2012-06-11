Jquery Lesh Selectors v1.0.0

- Sorry it's a stupid name, I know, but I'm unoriginal :P

:btwn(x,y) - selects elements from a collection of elements between two indices x and y. So if $('div') was to return ten elements, $('div:btwn(1,4)') would get the three divs between indexes 1 and 4. Another way to do this with the default JQuery selectors is like so: $('div:gt(0):lt(3)') which gets all indexes after 1, then gets all indexes from that set before 3. It's just a different way to approach the problem.
:regex(test) -  selects elements whose text contents match the regular expression in test. This value can be surrounded by quotes if need be.
:startsWith(str) - selects elements whose text contents start with str. This value can be surrounded by quotes if need be.
:endsWith(str) - selects elements whose text contents end with str. This value can be surrounded by quotes if need be.
:attrgt(name, val) - selects elements by testing the attribute named name to see if it is greater than the value supplied as val.
:attrlt(name, val) - selects elements by testing the attribute named name to see if it is less than the value supplied as val.
:attrgte(name, val) - selects elements by testing the attribute named name to see if it is greater than or equal to the value supplied as val.
:attrlte(name, val) - selects elements by testing the attribute named name to see if it is less than or equal to the value supplied as val.
:attrregex(name, test) - selects elements by testing the attrbute named name with the regular expression supplied to test. The regular expression may be surrounded with quotes.