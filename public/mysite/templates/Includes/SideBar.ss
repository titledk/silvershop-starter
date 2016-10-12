<aside id="SideBar" class="sidebar">
    <% if $Menu(2) %>
        <nav class="secondary">
            <% with $Level(1) %>
                <h3>
                    $MenuTitle
                </h3>
                <ul class="menu vertical">
                    <% include SidebarMenu %>
                </ul>
            <% end_with %>
        </nav>
    <% end_if %>
</aside>
