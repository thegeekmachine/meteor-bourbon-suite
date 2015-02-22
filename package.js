Package.describe({
    name: "thegeekmachine:bourbon-suite",
    summary: "Meteor 1.0+ - Scaffold styles, variables, structure and reusable components for Bourbon projects",
    version: "0.1.0",
    git: "https://github.com/thegeekmachine/meteor-bourbon-suite"
});

Package.onUse(function(api) {
    api.versionsFrom("METEOR@1.0");
    api.use('thegeekmachine:ruby-sass@0.1.0');

    api.addFiles([
        // Bourbon settings
        "bourbon/settings/_asset-pipeline.scss",
        "bourbon/settings/_prefixer.scss",
        "bourbon/settings/_px-to-em.scss",
        // Bourbon helpers
        "bourbon/helpers/_convert-units.scss",
        "bourbon/helpers/_directional-values.scss",
        "bourbon/helpers/_font-source-declaration.scss",
        "bourbon/helpers/_gradient-positions-parser.scss",
        "bourbon/helpers/_linear-angle-parser.scss",
        "bourbon/helpers/_linear-gradient-parser.scss",
        "bourbon/helpers/_linear-positions-parser.scss",
        "bourbon/helpers/_linear-side-corner-parser.scss",
        "bourbon/helpers/_radial-arg-parser.scss",
        "bourbon/helpers/_radial-gradient-parser.scss",
        "bourbon/helpers/_radial-positions-parser.scss",
        "bourbon/helpers/_render-gradients.scss",
        "bourbon/helpers/_shape-size-stripper.scss",
        "bourbon/helpers/_str-to-num.scss",
        // Bourbon functions
        "bourbon/functions/_assign-inputs.scss",
        "bourbon/functions/_contains-falsy.scss",
        "bourbon/functions/_contains.scss",
        "bourbon/functions/_is-length.scss",
        "bourbon/functions/_is-light.scss",
        "bourbon/functions/_is-number.scss",
        "bourbon/functions/_is-size.scss",
        "bourbon/functions/_modular-scale.scss",
        "bourbon/functions/_px-to-em.scss",
        "bourbon/functions/_px-to-rem.scss",
        "bourbon/functions/_shade.scss",
        "bourbon/functions/_strip-units.scss",
        "bourbon/functions/_tint.scss",
        "bourbon/functions/_transition-property-name.scss",
        "bourbon/functions/_unpack.scss",
        // Bourbon CSS3 mixins
        "bourbon/css3/_animation.scss",
        "bourbon/css3/_appearance.scss",
        "bourbon/css3/_backface-visibility.scss",
        "bourbon/css3/_background-image.scss",
        "bourbon/css3/_background.scss",
        "bourbon/css3/_border-image.scss",
        "bourbon/css3/_calc.scss",
        "bourbon/css3/_columns.scss",
        "bourbon/css3/_filter.scss",
        "bourbon/css3/_flex-box.scss",
        "bourbon/css3/_font-face.scss",
        "bourbon/css3/_font-feature-settings.scss",
        "bourbon/css3/_hidpi-media-query.scss",
        "bourbon/css3/_hyphens.scss",
        "bourbon/css3/_image-rendering.scss",
        "bourbon/css3/_keyframes.scss",
        "bourbon/css3/_linear-gradient.scss",
        "bourbon/css3/_perspective.scss",
        "bourbon/css3/_placeholder.scss",
        "bourbon/css3/_radial-gradient.scss",
        "bourbon/css3/_selection.scss",
        "bourbon/css3/_text-decoration.scss",
        "bourbon/css3/_transform.scss",
        "bourbon/css3/_transition.scss",
        "bourbon/css3/_user-select.scss",
        // Bourbon addons and other mixins
        "bourbon/addons/_border-color.scss",
        "bourbon/addons/_border-radius.scss",
        "bourbon/addons/_border-style.scss",
        "bourbon/addons/_border-width.scss",
        "bourbon/addons/_buttons.scss",
        "bourbon/addons/_clearfix.scss",
        "bourbon/addons/_ellipsis.scss",
        "bourbon/addons/_font-stacks.scss",
        "bourbon/addons/_hide-text.scss",
        "bourbon/addons/_margin.scss",
        "bourbon/addons/_padding.scss",
        "bourbon/addons/_position.scss",
        "bourbon/addons/_prefixer.scss",
        "bourbon/addons/_retina-image.scss",
        "bourbon/addons/_size.scss",
        "bourbon/addons/_text-inputs.scss",
        "bourbon/addons/_timing-functions.scss",
        "bourbon/addons/_triangle.scss",
        "bourbon/addons/_word-wrap.scss",
        // Bourbon almost-deprecated mixins
        "bourbon/_bourbon-deprecated-upcoming.scss",
        "bourbon/_bourbon.scss",
        
        // Bitters mixins
        "bitters/_base.scss",
        "bitters/_buttons.scss",
        "bitters/_forms.scss",
        "bitters/_grid-settings.scss",
        "bitters/_lists.scss",
        "bitters/_tables.scss",
        "bitters/_typography.scss",
        "bitters/_variables.scss",

        // Neat
        "neat/_neat-helpers.scss",
        // Neat functions
        "neat/functions/_new-breakpoint.scss",
        "neat/functions/_private.scss",
        // Neat grid
        "neat/grid/_box-sizing.scss",
        "neat/grid/_direction-context.scss",
        "neat/grid/_display-context.scss",
        "neat/grid/_fill-parent.scss",
        "neat/grid/_media.scss",
        "neat/grid/_omega.scss",
        "neat/grid/_outer-container.scss",
        "neat/grid/_pad.scss",
        "neat/grid/_private.scss",
        "neat/grid/_row.scss",
        "neat/grid/_shift.scss",
        "neat/grid/_span-columns.scss",
        "neat/grid/_to-deprecate.scss",
        "neat/grid/_visual-grid.scss",
        // Neat settings
        "neat/settings/_disable-warnings.scss",
        "neat/settings/_grid.scss",
        "neat/settings/_visual-grid.scss",
        "neat/_neat.scss",

        // Refills stylesheets
        "refills/stylesheets/_bourbon-nav.scss",
        "refills/stylesheets/_refills-nav.scss",
        "refills/stylesheets/_refills-styles.scss",
        "refills/stylesheets/all.scss",
        "refills/stylesheets/refills/_accordion-tabs-minimal.scss",
        "refills/stylesheets/refills/_accordion-tabs.scss",
        "refills/stylesheets/refills/_accordion.scss",
        "refills/stylesheets/refills/_animate-info.scss",
        "refills/stylesheets/refills/_animate.scss",
        "refills/stylesheets/refills/_badges.scss",
        "refills/stylesheets/refills/_breadcrumbs.scss",
        "refills/stylesheets/refills/_button-group.scss",
        "refills/stylesheets/refills/_cards.scss",
        "refills/stylesheets/refills/_centered-navigation.scss",
        "refills/stylesheets/refills/_comment.scss",
        "refills/stylesheets/refills/_device.scss",
        "refills/stylesheets/refills/_dropdown.scss",
        "refills/stylesheets/refills/_expander.scss",
        "refills/stylesheets/refills/_fade-in.scss",
        "refills/stylesheets/refills/_flashes.scss",
        "refills/stylesheets/refills/_flex-boxes.scss",
        "refills/stylesheets/refills/_footer-2.scss",
        "refills/stylesheets/refills/_footer.scss",
        "refills/stylesheets/refills/_grid-items-lines.scss",
        "refills/stylesheets/refills/_grid-items.scss",
        "refills/stylesheets/refills/_hero.scss",
        "refills/stylesheets/refills/_hover-tile-animation.scss",
        "refills/stylesheets/refills/_icon-bullet-points.scss",
        "refills/stylesheets/refills/_image-gradient-dynamic.scss",
        "refills/stylesheets/refills/_maps.scss",
        "refills/stylesheets/refills/_modal.scss",
        "refills/stylesheets/refills/_navigation.scss",
        "refills/stylesheets/refills/_pagination.scss",
        "refills/stylesheets/refills/_parallax.scss",
        "refills/stylesheets/refills/_progress-bar-indication.scss",
        "refills/stylesheets/refills/_progress-bar.scss",
        "refills/stylesheets/refills/_ribbon.scss",
        "refills/stylesheets/refills/_scroll-on-page.scss",
        "refills/stylesheets/refills/_search-bar.scss",
        "refills/stylesheets/refills/_search-tools.scss",
        "refills/stylesheets/refills/_side-image.scss",
        "refills/stylesheets/refills/_sliding-menu.scss",
        "refills/stylesheets/refills/_stats.scss",
        "refills/stylesheets/refills/_switch.scss",
        "refills/stylesheets/refills/_tables-minimal.scss",
        "refills/stylesheets/refills/_tables.scss",
        "refills/stylesheets/refills/_texture-legend.scss",
        "refills/stylesheets/refills/_textures.scss",
        "refills/stylesheets/refills/_tooltip.scss",
        "refills/stylesheets/refills/_type-system-geometric.scss",
        "refills/stylesheets/refills/_type-system-rounded.scss",
        "refills/stylesheets/refills/_type-system-sans.scss",
        "refills/stylesheets/refills/_type-system-serif.scss",
        "refills/stylesheets/refills/_type-system-slab.scss",
        "refills/stylesheets/refills/_type-system-traditional.scss",
        "refills/stylesheets/refills/_vertical-tabs.scss",
        "refills/stylesheets/refills/_video.scss",
        "refills/stylesheets/vendor/fixedsticky.css",
        "refills/stylesheets/vendor/normalize.css",
        "refills/stylesheets/vendor/prism.css"
    ], 'server', { isAsset: true });

    api.addFiles([
        // Refills
        "refills/favicon.ico",
        "refills/favicon.png",
        "refills/images/bourbon-nav/bitters.png",
        "refills/images/bourbon-nav/bitters@2x.png",
        "refills/images/bourbon-nav/bourbon.png",
        "refills/images/bourbon-nav/bourbon@2x.png",
        "refills/images/bourbon-nav/neat.png",
        "refills/images/bourbon-nav/neat@2x.png",
        "refills/images/bourbon-nav/refills.png",
        "refills/images/bourbon-nav/refills@2x.png",
        "refills/images/cat.png",
        "refills/images/cosmin_capitanu_screen.jpg",
        "refills/images/EmeraldLake.jpg",
        "refills/images/facebook-logo-circle-dark.png",
        "refills/images/facebook-logo-circle.png",
        "refills/images/indesign-logo-circle.png",
        "refills/images/lake-transparent.png",
        "refills/images/menu-white.png",
        "refills/images/menu.png",
        "refills/images/mountain-thin.png",
        "refills/images/mountains-2.png",
        "refills/images/mountains-3.png",
        "refills/images/mountains-4.png",
        "refills/images/mountains.png",
        "refills/images/placeholder_logo_1.png",
        "refills/images/placeholder_logo_1_dark.png",
        "refills/images/placeholder_logo_2.png",
        "refills/images/placeholder_logo_2_dark.png",
        "refills/images/placeholder_logo_3.png",
        "refills/images/placeholder_logo_3_dark.png",
        "refills/images/placeholder_logo_4.png",
        "refills/images/placeholder_logo_4_dark.png",
        "refills/images/ralph-gray.png",
        "refills/images/ralph.png",
        "refills/images/refills-logo.svg",
        "refills/images/refills-screenshot1.png",
        "refills/images/refills-screenshot2.jpg",
        "refills/images/refills-screenshot3.png",
        "refills/images/search-icon-black.png",
        "refills/images/search-icon.png",
        "refills/images/sliding-menu.png",
        "refills/images/textures/45degreee_fabric.png",
        "refills/images/textures/45degreee_fabric_@2X.png",
        "refills/images/textures/absurdidad.png",
        "refills/images/textures/absurdidad_@2X.png",
        "refills/images/textures/az_subtle.png",
        "refills/images/textures/az_subtle_@2X.png",
        "refills/images/textures/bgnoise_lg.png",
        "refills/images/textures/bgnoise_lg_@2X.png",
        "refills/images/textures/binding_light.png",
        "refills/images/textures/binding_light@2x.png",
        "refills/images/textures/brillant.png",
        "refills/images/textures/brillant_@2X.png",
        "refills/images/textures/brushed.png",
        "refills/images/textures/brushed_@2X.png",
        "refills/images/textures/brushed_alu.png",
        "refills/images/textures/brushed_alu_@2X.png",
        "refills/images/textures/chruch.png",
        "refills/images/textures/chruch_@2X.png",
        "refills/images/textures/circles.png",
        "refills/images/textures/circles_@2X.png",
        "refills/images/textures/concrete_wall_2.png",
        "refills/images/textures/concrete_wall_2_@2X.png",
        "refills/images/textures/concrete_wall_3.png",
        "refills/images/textures/concrete_wall_3_@2X.png",
        "refills/images/textures/corrugation.png",
        "refills/images/textures/corrugation_@2X.png",
        "refills/images/textures/cream_pixels.png",
        "refills/images/textures/cream_pixels@2x.png",
        "refills/images/textures/cross_scratches.png",
        "refills/images/textures/cross_scratches_@2X.png",
        "refills/images/textures/crosses.png",
        "refills/images/textures/crosses_@2X.png",
        "refills/images/textures/debut_light.png",
        "refills/images/textures/debut_light_@2X.png",
        "refills/images/textures/diagonal-noise.png",
        "refills/images/textures/diagonal-noise_@2X.png",
        "refills/images/textures/diagonal_waves.png",
        "refills/images/textures/diagonal_waves_@2X.png",
        "refills/images/textures/double_lined.png",
        "refills/images/textures/double_lined_@2X.png",
        "refills/images/textures/dust.png",
        "refills/images/textures/dust@2x.png",
        "refills/images/textures/dust_@2X.png",
        "refills/images/textures/fabric_plaid.png",
        "refills/images/textures/fabric_plaid_@2X.png",
        "refills/images/textures/fancy_deboss.png",
        "refills/images/textures/fancy_deboss_@2X.png",
        "refills/images/textures/farmer.png",
        "refills/images/textures/farmer_@2X.png",
        "refills/images/textures/first_aid_kit.png",
        "refills/images/textures/first_aid_kit_@2X.png",
        "refills/images/textures/graphy.png",
        "refills/images/textures/graphy_@2X.png",
        "refills/images/textures/grey.png",
        "refills/images/textures/grey_@2X.png",
        "refills/images/textures/grid.png",
        "refills/images/textures/grid_@2X.png",
        "refills/images/textures/grid_noise.png",
        "refills/images/textures/grid_noise_@2X.png",
        "refills/images/textures/gridme.png",
        "refills/images/textures/gridme_@2X.png",
        "refills/images/textures/grilled.png",
        "refills/images/textures/grilled_@2X.png",
        "refills/images/textures/groovepaper.png",
        "refills/images/textures/groovepaper_@2X.png",
        "refills/images/textures/honey_im_subtle.png",
        "refills/images/textures/honey_im_subtle_@2X.png",
        "refills/images/textures/husk.png",
        "refills/images/textures/husk_@2X.png",
        "refills/images/textures/inverted/45degreee_fabric.png",
        "refills/images/textures/inverted/45degreee_fabric_@2X.png",
        "refills/images/textures/inverted/absurdidad.png",
        "refills/images/textures/inverted/absurdidad_@2X.png",
        "refills/images/textures/inverted/az_subtle.png",
        "refills/images/textures/inverted/az_subtle_@2X.png",
        "refills/images/textures/inverted/bgnoise_lg.png",
        "refills/images/textures/inverted/bgnoise_lg_@2X.png",
        "refills/images/textures/inverted/binding_light.png",
        "refills/images/textures/inverted/binding_light@2x.png",
        "refills/images/textures/inverted/brillant.png",
        "refills/images/textures/inverted/brillant_@2X.png",
        "refills/images/textures/inverted/brushed.png",
        "refills/images/textures/inverted/brushed_@2X.png",
        "refills/images/textures/inverted/brushed_alu.png",
        "refills/images/textures/inverted/brushed_alu_@2X.png",
        "refills/images/textures/inverted/chruch.png",
        "refills/images/textures/inverted/chruch_@2X.png",
        "refills/images/textures/inverted/circles.png",
        "refills/images/textures/inverted/circles_@2X.png",
        "refills/images/textures/inverted/concrete_wall_2.png",
        "refills/images/textures/inverted/concrete_wall_2_@2X.png",
        "refills/images/textures/inverted/concrete_wall_3.png",
        "refills/images/textures/inverted/concrete_wall_3_@2X.png",
        "refills/images/textures/inverted/corrugation.png",
        "refills/images/textures/inverted/corrugation_@2X.png",
        "refills/images/textures/inverted/cream_pixels.png",
        "refills/images/textures/inverted/cream_pixels@2x.png",
        "refills/images/textures/inverted/cross_scratches.png",
        "refills/images/textures/inverted/cross_scratches_@2X.png",
        "refills/images/textures/inverted/crosses.png",
        "refills/images/textures/inverted/crosses_@2X.png",
        "refills/images/textures/inverted/debut_light.png",
        "refills/images/textures/inverted/debut_light_@2X.png",
        "refills/images/textures/inverted/diagonal-noise.png",
        "refills/images/textures/inverted/diagonal-noise_@2X.png",
        "refills/images/textures/inverted/diagonal_waves.png",
        "refills/images/textures/inverted/diagonal_waves_@2X.png",
        "refills/images/textures/inverted/double_lined.png",
        "refills/images/textures/inverted/double_lined_@2X.png",
        "refills/images/textures/inverted/dust.png",
        "refills/images/textures/inverted/dust@2x.png",
        "refills/images/textures/inverted/dust_@2X.png",
        "refills/images/textures/inverted/fabric_plaid.png",
        "refills/images/textures/inverted/fabric_plaid_@2X.png",
        "refills/images/textures/inverted/fancy_deboss.png",
        "refills/images/textures/inverted/fancy_deboss_@2X.png",
        "refills/images/textures/inverted/farmer.png",
        "refills/images/textures/inverted/farmer_@2X.png",
        "refills/images/textures/inverted/first_aid_kit.png",
        "refills/images/textures/inverted/first_aid_kit_@2X.png",
        "refills/images/textures/inverted/graphy.png",
        "refills/images/textures/inverted/graphy_@2X.png",
        "refills/images/textures/inverted/grey.png",
        "refills/images/textures/inverted/grey_@2X.png",
        "refills/images/textures/inverted/grid.png",
        "refills/images/textures/inverted/grid_@2X.png",
        "refills/images/textures/inverted/grid_noise.png",
        "refills/images/textures/inverted/grid_noise_@2X.png",
        "refills/images/textures/inverted/gridme.png",
        "refills/images/textures/inverted/gridme_@2X.png",
        "refills/images/textures/inverted/grilled.png",
        "refills/images/textures/inverted/grilled_@2X.png",
        "refills/images/textures/inverted/groovepaper.png",
        "refills/images/textures/inverted/groovepaper_@2X.png",
        "refills/images/textures/inverted/honey_im_subtle.png",
        "refills/images/textures/inverted/honey_im_subtle_@2X.png",
        "refills/images/textures/inverted/husk.png",
        "refills/images/textures/inverted/husk_@2X.png",
        "refills/images/textures/inverted/kindajean.png",
        "refills/images/textures/inverted/kindajean_@2X.png",
        "refills/images/textures/inverted/lghtmesh.png",
        "refills/images/textures/inverted/lghtmesh_@2X.png",
        "refills/images/textures/inverted/light_alu.png",
        "refills/images/textures/inverted/light_alu_@2X.png",
        "refills/images/textures/inverted/light_noise_diagonal.png",
        "refills/images/textures/inverted/light_noise_diagonal_@2X.png",
        "refills/images/textures/inverted/lil_fiber.png",
        "refills/images/textures/inverted/lil_fiber_@2X.png",
        "refills/images/textures/inverted/line_diagonal1.png",
        "refills/images/textures/inverted/line_diagonal2.png",
        "refills/images/textures/inverted/line_horizontal1.png",
        "refills/images/textures/inverted/line_horizontal2.png",
        "refills/images/textures/inverted/linen.png",
        "refills/images/textures/inverted/linen_@2X.png",
        "refills/images/textures/inverted/little_pluses.png",
        "refills/images/textures/inverted/little_pluses_@2X.png",
        "refills/images/textures/inverted/mooning.png",
        "refills/images/textures/inverted/mooning@2x.png",
        "refills/images/textures/inverted/noise_lines.png",
        "refills/images/textures/inverted/noise_lines_@2X.png",
        "refills/images/textures/inverted/noise_pattern_with_crosslines.png",
        "refills/images/textures/inverted/noise_pattern_with_crosslines_@2X.png",
        "refills/images/textures/inverted/noisy.png",
        "refills/images/textures/inverted/noisy_@2X.png",
        "refills/images/textures/inverted/noisy_grid.png",
        "refills/images/textures/inverted/noisy_grid_@2X.png",
        "refills/images/textures/inverted/noisy_grid_simple.png",
        "refills/images/textures/inverted/old_mathematics.png",
        "refills/images/textures/inverted/old_mathematics_@2X.png",
        "refills/images/textures/inverted/old_wall.png",
        "refills/images/textures/inverted/old_wall_@2X.png",
        "refills/images/textures/inverted/p5.png",
        "refills/images/textures/inverted/p5_@2X.png",
        "refills/images/textures/inverted/paper.png",
        "refills/images/textures/inverted/paper_@2X.png",
        "refills/images/textures/inverted/pinstripe.png",
        "refills/images/textures/inverted/pinstripe_@2X.png",
        "refills/images/textures/inverted/ps_neutral.png",
        "refills/images/textures/inverted/ps_neutral_@2X.png",
        "refills/images/textures/inverted/pw_maze_white.png",
        "refills/images/textures/inverted/pw_maze_white_@2X.png",
        "refills/images/textures/inverted/pw_pattern.png",
        "refills/images/textures/inverted/pw_pattern_@2X.png",
        "refills/images/textures/inverted/retina_dust.png",
        "refills/images/textures/inverted/retina_dust_@2X.png",
        "refills/images/textures/inverted/rice_paper.png",
        "refills/images/textures/inverted/rice_paper@2x.png",
        "refills/images/textures/inverted/rough_diagonal.png",
        "refills/images/textures/inverted/rough_diagonal_@2X.png",
        "refills/images/textures/inverted/shinedotted.png",
        "refills/images/textures/inverted/shinedotted_@2X.png",
        "refills/images/textures/inverted/skin_side_up.png",
        "refills/images/textures/inverted/skin_side_up_@2X.png",
        "refills/images/textures/inverted/squairy_light.png",
        "refills/images/textures/inverted/squairy_light_@2X.png",
        "refills/images/textures/inverted/stacked_circles.png",
        "refills/images/textures/inverted/stacked_circles_@2X.png",
        "refills/images/textures/inverted/striped_lens.png",
        "refills/images/textures/inverted/striped_lens_@2X.png",
        "refills/images/textures/inverted/struckaxiom.png",
        "refills/images/textures/inverted/struckaxiom_@2X.png",
        "refills/images/textures/inverted/stucco.png",
        "refills/images/textures/inverted/stucco_@2X.png",
        "refills/images/textures/inverted/subtle_dots.png",
        "refills/images/textures/inverted/subtle_dots_@2X.png",
        "refills/images/textures/inverted/subtle_freckles.png",
        "refills/images/textures/inverted/subtle_freckles_@2X.png",
        "refills/images/textures/inverted/subtle_grunge.png",
        "refills/images/textures/inverted/subtle_grunge_@2X.png",
        "refills/images/textures/inverted/subtle_surface.png",
        "refills/images/textures/inverted/subtle_surface_@2X.png",
        "refills/images/textures/inverted/subtle_zebra_3d.png",
        "refills/images/textures/inverted/subtle_zebra_3d_@2X.png",
        "refills/images/textures/inverted/subtlenet2.png",
        "refills/images/textures/inverted/subtlenet2_@2X.png",
        "refills/images/textures/inverted/tex2res5.png",
        "refills/images/textures/inverted/tex2res5_@2X.png",
        "refills/images/textures/inverted/texturetastic_gray.png",
        "refills/images/textures/inverted/texturetastic_gray_@2X.png",
        "refills/images/textures/inverted/tiny_grid.png",
        "refills/images/textures/inverted/tiny_grid_@2X.png",
        "refills/images/textures/inverted/vichy.png",
        "refills/images/textures/inverted/vichy_@2X.png",
        "refills/images/textures/inverted/vintage_speckles.png",
        "refills/images/textures/inverted/vintage_speckles_@2X.png",
        "refills/images/textures/inverted/wavecut.png",
        "refills/images/textures/inverted/wavecut_@2X.png",
        "refills/images/textures/inverted/wavegrid.png",
        "refills/images/textures/inverted/wavegrid_@2X.png",
        "refills/images/textures/inverted/white_carbon.png",
        "refills/images/textures/inverted/white_carbon_@2X.png",
        "refills/images/textures/inverted/white_texture.png",
        "refills/images/textures/inverted/white_texture_@2X.png",
        "refills/images/textures/inverted/white_wave.png",
        "refills/images/textures/inverted/white_wave_@2X.png",
        "refills/images/textures/inverted/whitey.png",
        "refills/images/textures/inverted/whitey_@2X.png",
        "refills/images/textures/inverted/worn_dots.png",
        "refills/images/textures/inverted/worn_dots_@2X.png",
        "refills/images/textures/kindajean.png",
        "refills/images/textures/kindajean_@2X.png",
        "refills/images/textures/lghtmesh.png",
        "refills/images/textures/lghtmesh_@2X.png",
        "refills/images/textures/light_alu.png",
        "refills/images/textures/light_alu_@2X.png",
        "refills/images/textures/light_noise_diagonal.png",
        "refills/images/textures/light_noise_diagonal_@2X.png",
        "refills/images/textures/lil_fiber.png",
        "refills/images/textures/lil_fiber_@2X.png",
        "refills/images/textures/line_diagonal1.png",
        "refills/images/textures/line_diagonal2.png",
        "refills/images/textures/line_horizontal1.png",
        "refills/images/textures/line_horizontal2.png",
        "refills/images/textures/linen.png",
        "refills/images/textures/linen_@2X.png",
        "refills/images/textures/little_pluses.png",
        "refills/images/textures/little_pluses_@2X.png",
        "refills/images/textures/mooning.png",
        "refills/images/textures/mooning@2x.png",
        "refills/images/textures/noise_lines.png",
        "refills/images/textures/noise_lines_@2X.png",
        "refills/images/textures/noise_pattern_with_crosslines.png",
        "refills/images/textures/noise_pattern_with_crosslines_@2X.png",
        "refills/images/textures/noisy.png",
        "refills/images/textures/noisy_@2X.png",
        "refills/images/textures/noisy_grid.png",
        "refills/images/textures/noisy_grid_@2X.png",
        "refills/images/textures/noisy_grid_simple.png",
        "refills/images/textures/old_mathematics.png",
        "refills/images/textures/old_mathematics_@2X.png",
        "refills/images/textures/old_wall.png",
        "refills/images/textures/old_wall_@2X.png",
        "refills/images/textures/p5.png",
        "refills/images/textures/p5_@2X.png",
        "refills/images/textures/paper.png",
        "refills/images/textures/paper_@2X.png",
        "refills/images/textures/pinstripe.png",
        "refills/images/textures/pinstripe_@2X.png",
        "refills/images/textures/ps_neutral.png",
        "refills/images/textures/ps_neutral_@2X.png",
        "refills/images/textures/pw_maze_white.png",
        "refills/images/textures/pw_maze_white_@2X.png",
        "refills/images/textures/pw_pattern.png",
        "refills/images/textures/pw_pattern_@2X.png",
        "refills/images/textures/retina_dust.png",
        "refills/images/textures/retina_dust_@2X.png",
        "refills/images/textures/rice_paper.png",
        "refills/images/textures/rice_paper@2x.png",
        "refills/images/textures/rough_diagonal.png",
        "refills/images/textures/rough_diagonal_@2X.png",
        "refills/images/textures/shinedotted.png",
        "refills/images/textures/shinedotted_@2X.png",
        "refills/images/textures/skin_side_up.png",
        "refills/images/textures/skin_side_up_@2X.png",
        "refills/images/textures/squairy_light.png",
        "refills/images/textures/squairy_light_@2X.png",
        "refills/images/textures/stacked_circles.png",
        "refills/images/textures/stacked_circles_@2X.png",
        "refills/images/textures/striped_lens.png",
        "refills/images/textures/striped_lens_@2X.png",
        "refills/images/textures/struckaxiom.png",
        "refills/images/textures/struckaxiom_@2X.png",
        "refills/images/textures/stucco.png",
        "refills/images/textures/stucco_@2X.png",
        "refills/images/textures/subtle_dots.png",
        "refills/images/textures/subtle_dots_@2X.png",
        "refills/images/textures/subtle_freckles.png",
        "refills/images/textures/subtle_freckles_@2X.png",
        "refills/images/textures/subtle_grunge.png",
        "refills/images/textures/subtle_grunge_@2X.png",
        "refills/images/textures/subtle_surface.png",
        "refills/images/textures/subtle_surface_@2X.png",
        "refills/images/textures/subtle_zebra_3d.png",
        "refills/images/textures/subtle_zebra_3d_@2X.png",
        "refills/images/textures/subtlenet2.png",
        "refills/images/textures/subtlenet2_@2X.png",
        "refills/images/textures/tex2res5.png",
        "refills/images/textures/tex2res5_@2X.png",
        "refills/images/textures/texturetastic_gray.png",
        "refills/images/textures/texturetastic_gray_@2X.png",
        "refills/images/textures/tiny_grid.png",
        "refills/images/textures/tiny_grid_@2X.png",
        "refills/images/textures/vichy.png",
        "refills/images/textures/vichy_@2X.png",
        "refills/images/textures/vintage_speckles.png",
        "refills/images/textures/vintage_speckles_@2X.png",
        "refills/images/textures/wavecut.png",
        "refills/images/textures/wavecut_@2X.png",
        "refills/images/textures/wavegrid.png",
        "refills/images/textures/wavegrid_@2X.png",
        "refills/images/textures/white_carbon.png",
        "refills/images/textures/white_carbon_@2X.png",
        "refills/images/textures/white_texture.png",
        "refills/images/textures/white_texture_@2X.png",
        "refills/images/textures/white_wave.png",
        "refills/images/textures/white_wave_@2X.png",
        "refills/images/textures/whitey.png",
        "refills/images/textures/whitey_@2X.png",
        "refills/images/textures/worn_dots.png",
        "refills/images/textures/worn_dots_@2X.png",
        "refills/images/twitter-logo-circle-dark.png",
        "refills/images/twitter-logo-circle.png",
        "refills/images/youtube-logo-circle-dark.png",
        "refills/images/youtube-logo-circle.png",
        "refills/images/ZeroClipboard.swf",
        // Refills Javascript
        "refills/javascripts/jquery.glide.js",
        "refills/javascripts/refills/accordion.js",
        "refills/javascripts/refills/accordion_tabs.js",
        "refills/javascripts/refills/accordion_tabs_minimal.js",
        "refills/javascripts/refills/animate.js",
        "refills/javascripts/refills/centered_navigation.js",
        "refills/javascripts/refills/dropdown.js",
        "refills/javascripts/refills/expander.js",
        "refills/javascripts/refills/fade_in.js",
        "refills/javascripts/refills/modal.js",
        "refills/javascripts/refills/navigation.js",
        "refills/javascripts/refills/parallax.js",
        "refills/javascripts/refills/scroll_on_page.js",
        "refills/javascripts/refills/search_tools.js",
        "refills/javascripts/refills/sliding_menu.js",
        "refills/javascripts/refills/vertical_tabs.js",
        "refills/javascripts/vendor/fixedsticky.js",
        "refills/javascripts/vendor/prism.js",
        "refills/javascripts/vendor/smooth-scroll.js",
        "refills/javascripts/vendor/ZeroClipboard.min.js"
    ], 'client');
});
