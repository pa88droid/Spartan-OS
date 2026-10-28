// Spartan OS: single bottom panel, no top panel.
const previousPanels = panels();
const panel = new Panel;

panel.location = "bottom";
panel.alignment = "center";
panel.lengthMode = "fill";
panel.height = 44;
panel.hiding = "none";
panel.userBackgroundHints = "NoBackground";

function addFlexibleSpacer(targetPanel) {
    const spacer = targetPanel.addWidget("org.kde.plasma.panelspacer");
    spacer.currentConfigGroup = ["General"];
    spacer.writeConfig("expanding", true);
}

addFlexibleSpacer(panel);

// Searchable application launcher and centered task icons.
panel.addWidget("org.kde.plasma.kickoff");
panel.addWidget("org.kde.plasma.icontasks");

// Keep tray and clock at the right, with a flexible spacer before them.
addFlexibleSpacer(panel);
panel.addWidget("org.kde.plasma.systemtray");
const clock = panel.addWidget("org.kde.plasma.digitalclock");
clock.currentConfigGroup = ["Appearance"];
clock.writeConfig("showDate", false);

// Remove the stock panel(s) only after the replacement exists.
previousPanels.forEach(function(oldPanel) {
    if (oldPanel && oldPanel.id !== panel.id) {
        oldPanel.remove();
    }
});
