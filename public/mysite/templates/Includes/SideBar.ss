<aside id="SideBar" class="sidebar">
    <% if $GroupsMenu %>
        <% include ProductMenu %>
    <% else %>
        <% with $Parent %>
            <% if $ProductMenu %>
                <% include ProductMenu %>
            <% end_if %>
        <% end_with %>
    <% end_if %>
  <div class="cart">
      <% include SideCart %>
  </div>
</aside>
