# Infix, Prefix and Postfix

Infix , Prefix and Postfix notations which are ways of writing arithmetic and logical expressions. Infix notation is the most common way of writing expressions. Prefix and Postfix notations are other two ways that are good for machines because they can be parsed and evaluated easily. This is one important topic in computer science where we find application of stack data structure.

<table>
<tr><td>Infix</td> <td>Prefix</td><td>Postfix</td></tr>
<tr><td>2+3</td> <td>+23</td><td>Postfix</td></tr>
<tr><td>P-2</td> <td>-P</td><td>P2-</td></tr>
<tr><td>a+b*c</td> <td>+a*bc</td><td>abc*+</td></tr>
</table>

## Infix

Order of operation

1) Parentheses `() {} []`
2) Exponents `right to left`
3) Multiplication and division `left to right`
4) Addition and Subtraction `left to right`

## Prefix (Polish notation)

`<operator><operand><operand>`

## PostFix (Reverse polish notation)

`<operand><operand><operator>`
