<nav id="Navigation" class="primary">
    <div class="row">
        <div class="columns">
            <div class="title-bar" data-responsive-toggle="mainmenu" data-hide-for="medium">
                <button class="menu-icon" type="button" data-toggle></button>
                <div class="title-bar-title"></div>
            </div>

            <div class="top-bar" id="mainmenu">
                <ul class="menu vertical medium-horizontal">
                    <% loop $Menu(1) %>
                        <li class="$LinkingMode"><a href="$Link" title="$Title.XML">$MenuTitle.XML</a></li>
                    <% end_loop %>
                </ul>
            </div>
        </div>
    </div>
</nav>
