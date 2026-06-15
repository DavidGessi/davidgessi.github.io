<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import './layout.css'; 

    let { children } = $props();
</script>

<div class="bg-neutral-950 min-h-screen">
    <Navbar />
    
    <main>
        {@render children()}
    </main>

    <Footer />
</div>