<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/jiscfe/templates/page/page.html.twig */
class __TwigTemplate_ce29769f5ba87de7348b51bb90a544a0fdcdbaa55df2a8a2a0fcdbe06386bf16 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = [];
        $filters = ["escape" => 65];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                [],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 1
        echo "<header class=\"c-structure__jisc-masthead\" role=\"banner\">



    <p>
        <a class=\"c-main-content-skiplink\" href=\"#main-content\">
            <span class=\"c-main-content-skiplink__copy\">Skip to main content</span>
        </a>
    </p>



    <div class=\"c-jisc-banner\">
        <div class=\"o-layout__container\">
            <div class=\"c-jisc-banner__inner\">

                <p class=\"c-jisc-banner__jisc-brand\">
                    <a class=\"c-jisc-logo c-jisc-banner__jisc-logo\" href=\"//www.jisc.ac.uk/\" title=\"Go to the Jisc homepage\">
                        <img class=\"c-jisc-logo__img c-jisc-logo__img--jisc-banner\" src=\"/themes/jiscfe/img/jisc-logo.svg\" alt=\"Jisc\">
                    </a>
                </p>


            </div>
        </div>
    </div>
<div class=\"c-jisc-header c-jisc-header--site-header c-jisc-header--has-subtitle-and-nav\">

    <div class=\"o-layout__container\">

        <div class=\"c-jisc-header__titles-supersegment\">

            <div class=\"c-jisc-header__title-segment\">
                <p class=\"c-jisc-header__title\">
                    <a class=\"c-jisc-header__title-link\" href=\"//www.jisc.ac.uk\">JiscMail</a>
                </p>
            </div>

            <div class=\"c-jisc-header__subtitle-and-menu-trigger-segment\">

                <div class=\"c-jisc-header__subtitle-subsegment\">
                    <p class=\"c-jisc-header__subtitle\">Subtitle can be quite long at times or even longer or may even be really really long</p>
                </div>

                <div class=\"c-jisc-header__menu-trigger-subsegment\">
                    <p class=\"c-jisc-header__menu-trigger\">
                        <a class=\"c-jisc-header__menu-trigger-button\" href=\"#TODO\">
                            <span class=\"c-jisc-header__menu-trigger-copy\">Menu</span>
                            <svg class=\"svg-inline--fa fa-bars fa-w-14 c-jisc-header__menu-trigger-icon\" aria-hidden=\"true\" data-prefix=\"fas\" data-icon=\"bars\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" data-fa-i2svg=\"\"><path fill=\"currentColor\" d=\"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z\"></path></svg><!-- <i class=\"fas fa-bars c-jisc-header__menu-trigger-icon\" aria-hidden=\"true\"></i> -->
                        </a>
                    </p>
                </div>

            </div>

        </div>

    </div>

    <div class=\"c-jisc-header__menu-supersegment c-jisc-header__menu-supersegment--tabbed is-closed\">
        <div class=\"o-layout__container\">


            <nav class=\"c-jisc-header__tabbed-nav c-jisc-header__tabbed-nav--primary\" aria-labelledby=\"site-navigation\">
                ";
        // line 65
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "primary_menu", [])), "html", null, true);
        echo "
                ";
        // line 67
        echo "                ";
        // line 68
        echo "                    ";
        // line 69
        echo "                        ";
        // line 70
        echo "                    ";
        // line 71
        echo "                    ";
        // line 72
        echo "                        ";
        // line 73
        echo "                    ";
        // line 74
        echo "                    ";
        // line 75
        echo "                        ";
        // line 76
        echo "                    ";
        // line 77
        echo "                    ";
        // line 78
        echo "                        ";
        // line 79
        echo "                    ";
        // line 80
        echo "                ";
        // line 81
        echo "            </nav>

        </div>
    </div>

</div>
</header>

<main class=\"o-layout__main-content\" id=\"main-content\" role=\"main\">

    <div class=\"c-structure__major-content\">



        <div class=\"c-generic-slice c-generic-slice--light-bg c-generic-slice--last\">
            <div class=\"o-layout__container\">





                <div class=\"o-grid\">
                    <div class=\"o-grid__item u-9/12@MD\">





    ";
        // line 109
        echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["page"] ?? null), "content", [])), "html", null, true);
        echo "


                    </div>
                </div>
            </div>

                </div>


            </div>

</main>


";
    }

    public function getTemplateName()
    {
        return "themes/jiscfe/templates/page/page.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  183 => 109,  153 => 81,  151 => 80,  149 => 79,  147 => 78,  145 => 77,  143 => 76,  141 => 75,  139 => 74,  137 => 73,  135 => 72,  133 => 71,  131 => 70,  129 => 69,  127 => 68,  125 => 67,  121 => 65,  55 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("", "themes/jiscfe/templates/page/page.html.twig", "/Users/parulbajaj/Desktop/Projects/JiscMailWebsite/themes/jiscfe/templates/page/page.html.twig");
    }
}
