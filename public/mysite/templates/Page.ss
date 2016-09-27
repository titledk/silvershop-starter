<!doctype html>
<html class="no-js" lang="$ContentLocale.ATT" dir="$i18nScriptDirection.ATT">
<head>
    <% include Head %>
</head>
<body class="Site $ClassName.ATT" <% if $BodyID %>id="$BodyID"<% end_if %>>

    <% include Header %>
    <% include Navigation %>

    <% if $ClassName != 'HomePage' %>
        <% include Breadcrumbs %>
    <% end_if %>

    <div class="main">
        $Layout
    </div>

    <% include Footer %>
    <% include CookiePolicyMsg %>
    <% include TrackingScripts %>
</body>
</html>
