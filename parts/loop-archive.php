<article id="post-<?php the_ID(); ?>" <?php post_class(''); ?> role="article">					
	
	<header>
		<h2>
            <a href="<?php the_permalink() ?>" rel="bookmark" title="<?php the_title_attribute(); ?>">
                <?php the_title(); ?>
            </a>
        </h2>
	</header>
					
	<section itemprop="articleBody">
		<a href="<?php the_permalink() ?>">
            <?php the_post_thumbnail('full'); ?>
        </a>
		<?php the_excerpt(); ?>
	</section>
						
	<footer>
    	<?php the_tags(); ?>
	</footer>	
				    						
</article>