# Another Logic Description Language | Specification
<link rel="stylesheet" href="highlights.css">

### Declarations
The code must declare in it's 3 first lines:
- Logic type (Combinatory or Sequential)
- Addres lane width
- Data lane width
###### Example:
<pre><code><cg>#Combinatory</cg>
<cr>A[0:14];
D[0:7];</cr></code></pre>

The rest of the code must be composed of logic expressions, assignments, declarations, or comments.