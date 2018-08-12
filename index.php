<?php get_header(); ?>
			
	<div>

		<?php if (have_posts()) : ?>
		
			<?php while (have_posts()) : the_post(); ?>
					
				<?php get_template_part( 'parts/loop', 'archive' ); ?>
				
			<?php endwhile; ?>	
				
		<?php endif; ?>
	
	</div>

<?php get_footer(); ?>