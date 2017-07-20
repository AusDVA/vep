<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width">  
<style type="text/css">
  body {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen",
                          "Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
 }
  p,
  li {
    font-size: 16px;
    font-weight: 400;
 }

	</style>
</head>

<body>
  <h2>Dear Veterans’ Employment team,</h2>
  <h3>You have received feedback or a query from ${name}.</h3>
  <p>The feedback / query received from <b>${name}</b> is:</p>
  <p>${feedbackMessage}</p>
  <p><b>${name}'s</b> contact details are:</p>
    <ul>
    
      <#if email??>
        <li>Email: <b>${email}</b></li>
      </#if>

      <#if phone??>
        <li>Phone: <b>${phone}</b></li>
      </#if>
        
      </ul>
  <p>Kind Regards, <br/> Prime Minister's Veterans' Employment Program.</p>
</body>

</html>
