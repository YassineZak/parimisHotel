<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Twig\Environment;

class HomePageController extends  AbstractController
{
    public function indexAction(Environment $twig){
       return new Response($twig->render("pages/index.html.twig"));
    }

}
