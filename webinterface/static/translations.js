function translate(key) {
    let lang = getLanguage();
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    // Return the original text if no translation found
    return key;
}

function translateStaticContent() {
    let language = getLanguage();

    // Set the lang attribute on the <html> element
    document.documentElement.setAttribute('lang', language);

    // Set the lang attribute on the <html> element
    document.documentElement.setAttribute('lang', language);

    // Translate text content
    const textElements = document.querySelectorAll('[data-translate]');
    textElements.forEach((element) => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach((element) => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
}

function getLanguage() {
    let language = getCookie('lang');
    if (!language) {
        const browserLanguage = navigator.language.slice(0, 2);
        // Map supported languages to their respective codes
        const languageMap = {
            'pl': 'pl',
            'en': 'en',
            'de': 'de',
            'fr': 'fr',
            'es': 'es',
            'zh': 'zh',
            'hi': 'hi',
            'pt': 'pt',
            'ja': 'ja',
            'ko': 'ko',
            'he': 'he',
            'ar': 'ar',
        };
        // If the browser language is supported, set it; otherwise, set to 'en'
        language = languageMap[browserLanguage] || "en";
    }
    return language;
}


const translations = {
    en: {
        //index
        loading: "Loading...",
        home: "Home",
        led_settings: "LED Settings",
        songs: "Songs",
        sequences: "Sequences",
        ports_settings: "Ports Settings",
        led_animations: "LED Animations",
        wifi: "Wi-Fi",
        switch_ports: "Switch Ports",
        view_on_github: "View on GitHub",
        join_discord: "Join Discord server",

        //ledcolor
        led_color: "LED Color",
        multicolor: "Multicolor",
        rainbow_colors: "Rainbow Colors",
        speed: "Speed",
        gradient: "Gradient",
        scale_coloring: "Scale Coloring",
        velocity_rainbow: "Velocity Rainbow",

        offset:  "Offset",
        scale: "Scale",
        timeshift: "Timeshift",
        scale_percent: "Scale %",
        curve_percent: "Curve %",
        slow_color: "Slow Color",
        fast_color: "Fast Color",
        max_notes: "Max Notes",
        period_in_seconds: "Period in seconds",
        start: "Start",
        end: "End",
        color_for_in_scale: "Color for in scale",
        color_for_not_in_scale: "Color for not in scale",
        scale_key: "Scale key",

        //lightmode
        fading: "Fading",
        velocity: "Velocity",
        instant: "Instant",
        very_fast: "Very Fast",
        fast: "Fast",
        medium: "Medium",
        slow: "Slow",
        very_slow: "Very Slow",

        //ledsettings
        backlight: "Backlight",
        sides_colors:  "Sides Colors",
        off: "Off",
        same_as_led_color: "Same as LED Color",
        rgb: "RGB",
        adjustments: "Adjustments",
        skipped_notes: "Skipped Notes",
        finger_based_ignore: "Finger Based: ignore notes with information about which hand to play",
        normal_ignore_all_other: "Normal:ignore all other notes",
        none: "None",
        finger_based: "Finger Based",
        reverse: "Reverse",
        inverted: "Inverted",
        shift: "Shift",
        led_count: "Led Count",
        leds_per_meter: "Leds per meter",
        led_note_offsets: "LED Note Offsets",
        shift_notes_for_better_alignment: "Adjust LED positions for better alignment",
        light_number_means: "Note Number: 72, Offset: 2: For notes above 72, LEDs shifts 2 positions backwards (towards lower notes)",
        light_number: "Note Number",
        note_offset: "Note offset",
        disable_backlight_on_idle: "Disable Backlight on idle",

        //songs
        status: "Status",
        start_recording: "Start Recording",
        starting: "starting",
        stop_and_save: "Stop and Save",
        cancel_recording: "Cancel Recording",
        canceling:  "canceling",
        upload_songs: "Upload Songs",
        drag_and_drop_midi: "Drag and drop midi file(s) here",
        or_click_to_choose: "or click to choose file(s) to upload",
        play_on_piano: "Play on piano",
        stop: "Stop",
        learning_status: "Start learning",
        stop_learning: "Stop learning",
        loop: "Loop",
        practice: "Practice",
        melody: "Melody",
        rhythm: "Rhythm",
        listen:  "Listen",
        tempo:  "Tempo",
        hands: "Hands",
        both: "Both",
        right: "Right",
        left: "Left",
        mute_hands: "Mute Hands",
        wrong_notes: "Wrong Notes",
        disabled: "Disabled",
        enabled: "Enabled",
        future_notes: "Future Notes",
        start_point: "Start Point",
        set_the_current_track_time: "Set the current track time as the loop start",
        end_point: "End Point",
        set_the_current_track_time_as_the_loop_end: "Set the current track time as the loop end",
        left_hand_color: "Left hand color",
        right_hand_color: "Right hand color",
        songs_list: "Songs List",
        getting_songs_list: "Getting songs list",
        number_of_mistakes: "Number of mistakes to restart loop (0 - never)",

        //sheetmusic
        load_custom_sheet: "Load custom sheet",
        offset_ms: "Offset (ms)",
        sheet_tip_line_1: "If the automatic conversion does not suit your expectations, you can load your own musical notation.",
        sheet_tip_line_2: "The highlighted part of the music notation is only an approximate indicator. Use the offset tool to improve synchronization.",
        sheet_tip_line_3: "For the best result do the following:",
        sheet_tip_line_4: "1. Convert your music notation to a midi file using Musescore or similar program, name it the same as the midi file you want to load. (E.g. my_music.mid and my_music.xml)",
        sheet_tip_line_5: "2. Upload the midi file and the music notation file.",

        //songslist
        name: "Name",
        date: "Date",
        action: "Action",
        songs_per_page: "Songs per page",
        total_songs: "Total songs: ",

        //sequences
        sequence: "Sequence",
        active_sequence: "Active Sequence",
        color: "Color",
        next_step: "Next Step",
        press_spacebar:  "Press spacebar",
        add: "Add",
        remove: "Remove",
        step: "Step",
        activation_method:  "Activation Method",
        button_press: "Button Press",
        sustain_pedal: "Sustain Pedal",
        portamento_pedal:  "Portamento Pedal",
        sostuneto_pedal: "Sostuneto Pedal",
        soft_pedal: "Soft Pedal",
        next_step_value:  "Next Step Value",
        next_step_tip_line_1: "This value decides if next step is activated when you press or release the pedal.",
        next_step_tip_line_2: "For example if you want to change settings after fully pressing Sostenuto pedal you should set it to 126",
        next_step_tip_line_3: "(127 is the maximum value when pedal is fully pressed).",
        next_step_tip_line_4: "Set value to -1 to change settings with your pedal by releasing it fully.",
        sequence_name: "Sequence name",
        save_current_settings_to_step: "Save current settings to step",

        //ports
        for_lighting_leds: "For lighting LEDs with your keyboard, set your piano port as an active input.",
        set_your_synthesia: "Set your Synthesia's port for learning mode.",
        active: "Active",
        switch: "Switch",
        secondary: "Secondary",
        used_for_sound: "Used for sound when playing a midi file.",
        list_of_ports: "List of ports and connections",
        disconnect_ports: "Disconnect ports",
        restart_rtp: "Restart RTP MIDI service",
        midi_events: "MIDI events",
        show_midi_events: "Show midi events (might degrade performance)",

        //network
        connected_wifi: "Connected Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Disconnect Wi-Fi and create Hotspot",
        disconnecting_warning_line_1: "Disconnecting from Wi-Fi will start the process of creating a Hotspot. This might take a moment.",
        disconnecting_warning_line_2: "You'll need to connect to the newly created Hotspot to access the web interface again.",
        wifi_list: "Wi-Fi List",
        local_address: "Local Address",
        change_address: "Change Address",
        enter_local_address: "Enter new local address",
        hotspot_password_section_title: "Hotspot Password",
        enter_hotspot_password: "Enter new hotspot password (min 8 chars)",
        change_hotspot_password_button: "Change Hotspot Password",
        show_password: "Show Password",
        hide_password: "Hide Password",
        password_too_short: "Password must be at least 8 characters long.",
        changing_hotspot_password_message: "Changing hotspot password... Please wait.",
        hotspot_password_changed_success: "Hotspot password changed successfully! The hotspot will restart.",
        hotspot_password_changed_fail: "Failed to change hotspot password.",
        hotspot_password_changed_fail_error: "Error changing hotspot password. Please try again.",
        hotspot_password_change_note: "Note: Changing the password will enable the hotspot if it's not already active and will restart it, disconnecting current users.",
        password_strength_weak: "Weak",
        password_strength_medium: "Medium",
        password_strength_strong: "Strong",
        password_strength_very_strong: "Very Strong",
        password_too_short_strength: "Too short",

        //ledanimations
        stop_animation: "Stop animation",
        led_animation_on_idle: "LED animation on IDLE",
        after_minutes: "after minutes (0 - never)",
        animation_type: "Animation type",

        //homepage
        advanced_mode: "Advanced mode",
        system_cpu_usage: "System CPU usage",
        ram_usage: "Ram usage",
        disk_usage: "Disk Usage",
        bandwidth_usage: "Bandwidth Usage",
        process_cpu_usage: "Process CPU usage",
        metronome: "Metronome",
        beats_per_measure: "Beats Per Measure",
        volume: "Volume",
        color_mode: "Color Mode",
        single: "Single",
        light_mode: "Light Mode",
        normal: "Normal",
        brightness: "Brightness",
        backlight_brightness: "Backlight Brightness",
        input_port: "Input Port",
        playback_port: "Playback Port",
        cover_state: "Cover State",
        screen: "Screen",
        reset_settings_to_default: "Reset settings to default",
        confirm: "Confirm",
        restart_rpi: "Restart RPi",
        restart_visualizer: "Restart Visualizer",
        power_off: "Power Off",
        update_visualizer: "Update Visualizer",
        connect_ports: "Connect Ports",
        clean_led_strip: "Clean LED Strip",
        logs: "Logs",
        show_last: "Show last",
        lines: "lines",
        reinitialize_network_on_boot: "Reinitialize network on boot",
        required_for_some_routers: "Required for some routers. Disabling this option will speed up the start, but it may cause connection issues",

        //dynamic content
        incorrect_password: "If an incorrect password is entered, it might take a few minutes for the hotspot to be reestablished.",
        if_the_hotspot: "If the Hotspot doesn't appear after 5 minutes, please restart the device",
        connect: "Connect",
        session_summary: "Session Summary",
        right_hand_mistakes: "Right Hand Mistakes",
        right_hand_delay: "Long Response Time - Right Hand",
        left_hand_mistakes: "Left Hand Mistakes",
        left_hand_delay: "Long Response Time - Left Hand",
        right_hand_notes: "Right Hand Notes",
        left_hand_notes: "Left Hand Notes",
        right_hand_mistakes: "Right Hand Errors",
        left_hand_mistakes: "Left Hand Errors",
        note_timing_vs_delay: "Note Timing vs Delay",
        chart_tooltip_label_delay: "Delay",
        chart_tooltip_label_at_time: "At",
        mistakes: "Timing Mistake",
        max_acceptaple_delay: "Maximum Allowable Delay",
        time: "MIDI Time (seconds)",
        delay: "Delay (seconds)",
        reset_zoom: "Reset",
        learning_status: "Start Learning"
        
        


    },
    pl: {
        //index
        loading: "Åadowanie...",
        home: "Strona gÅÃ³wna",
        led_settings: "Ustawienia LED",
        songs: "Nuty",
        sequences: "Sekwencje",
        ports_settings: "Ustawienia PortÃ³w",
        led_animations: "Animacje LED",
        wifi: "Wi-Fi",
        switch_ports: "ZamieÅ Porty",
        view_on_github: "SprawdÅº GitHub",
        join_discord: "DoÅÄcz do serwera Discord",

        offset: "PrzesuniÄcie",
        scale: "Skala",
        timeshift: "PrzesuniÄcie czasu",
        scale_percent: "Skala %",
        curve_percent: "Krzywa %",
        slow_color: "Wolno - kolor",
        fast_color: "Szybko - kolor",
        max_notes: "Maksymalna liczba nut",
        period_in_seconds: "Okres w sekundach",
        start: "PoczÄtek",
        end: "Koniec",
        color_for_in_scale: "Kolor dla nut w skali",
        color_for_not_in_scale: "Kolor dla nut poza skalÄ",
        scale_key: "Klucz skali",


        //ledcolor
        led_color: "Kolor LED",
        multicolor: "Wiele kolorÃ³w",
        rainbow_colors: "TÄcza",
        speed: "PrÄdkoÅÄ",
        gradient: "Gradient",
        scale_coloring: "Skala kolorÃ³w",
        velocity_rainbow: "TÄcza-PrÄdkoÅÄ",

        //lightmode
        fading: "Zanikanie",
        velocity: "SzybkoÅÄ nacisku",
        instant: "Natychmiast",
        very_fast: "Bardzo szybko",
        fast: "Szybko",
        medium: "Årednio",
        slow: "Wolno",
        very_slow: "Bardzo wolno",

        //ledsettings
        backlight: "PodÅwietlenie",
        sides_colors:  "SÄsiadujÄce diody",
        off: "WyÅÄcz",
        same_as_led_color: "Takie same jak kolor LED",
        rgb: "RGB",
        adjustments: "Poprawki",
        skipped_notes: "PominiÄte nuty",
        finger_based_ignore: "Finger Based: ignoruj nuty z informacjÄ ktÃ³rÄ rÄkÄ naleÅ¼y graÄ",
        normal_ignore_all_other: "Normal: ignoruj wszystkie inne nuty",
        none: "Brak",
        finger_based: "Finger Based",
        reverse: "Kierunek",
        inverted: "OdwrÃ³cone",
        shift: "PrzesuniÄcie",
        led_count: "Liczba diÃ³d",
        leds_per_meter: "LedÃ³w na metr",
        led_note_offsets: "PrzesuniÄcie diÃ³d wzglÄdem nut",
        shift_notes_for_better_alignment: "Dostosuj pozycje diod LED dla lepszego wyrÃ³wnania",
        light_number_means: "Numer nuty: 72, PrzesuniÄcie: 2: Dla nut powyÅ¼ej 72 diody przesuwajÄ siÄ o 2 pozycje w lewo (w stronÄ niÅ¼szych nut)",
        light_number: "Numer nuty",
        note_offset: "PrzesuniÄcie",
        disable_backlight_on_idle: "WyÅÄcz podÅwietlenie w stanie spoczynku",

        //songs
        status: "Status",
        start_recording: "Rozpocznij nagrywanie",
        stop_recording: "Zatrzymaj nagrywanie",
        starting: "Rozpoczynanie",
        stop_and_save: "Zatrzymaj i zapisz",
        cancel_recording: "Anuluj nagrywanie",
        canceling: "Anulowanie",
        upload_songs: "PrzeÅlij Nuty",
        drag_and_drop_midi: "PrzeciÄgnij i upuÅÄ MIDI",
        or_click_to_choose: "Lub kliknij aby wybraÄ",
        play_on_piano: "OdtwÃ³rz na pianie",
        stop: "Zatrzymaj",
        learning_status: "Zacznij naukÄ",
        stop_learning: "Zatrzymaj naukÄ",
        loop: "PÄtla",
        practice: "Äwiczenia",
        melody:  "Melodia",
        rhythm: "Rytm",
        listen: "SÅuchaj",
        tempo:  "Tempo",
        hands: "RÄce",
        both: "Obie",
        right: "Prawa",
        left: "Lewa",
        mute_hands: "Wycisz rÄce",
        wrong_notes: "Niepoprawne nuty",
        disabled: "WyÅÄczone",
        enabled: "WÅÄczone",
        future_notes: "PrzyszÅe nuty",
        start_point: "PoczÄtek",
        set_the_current_track_time: "Ustaw aktualny czas jako poczÄtek",
        end_point: "Koniec",
        set_the_current_track_time_as_the_loop_end: "Ustaw aktualny czas jako koniec",
        left_hand_color: "Kolor lewej rÄki",
        right_hand_color: "Kolor prawej rÄki",
        songs_list: "Lista Nut",
        getting_songs_list: "Åadowanie listy nut",
        number_of_mistakes: "Liczba bÅÄdÃ³w do ponownego uruchomienia pÄtli (0 - nigdy)",

        //sheetmusic
        load_custom_sheet: "Wczytaj wÅasny zapis nutowy",
        offset_ms: "PrzesuniÄcie (ms)",
        sheet_tip_line_1: "JeÅli automatyczna konwersja nie speÅnia oczekiwaÅ moÅ¼esz wczytaÄ wÅasny zapis nutowy",
        sheet_tip_line_2: "PodÅwietlona czÄÅÄ zapisu nutowego jest tylko szacunkowÄ wskazÃ³wkÄ. UÅ¼yj narzÄdzia do zmiany przesuniÄcia by poprawiÄ synchronizacjÄ",
        sheet_tip_line_3: "W celu osiÄgniÄcia najlepszych efektÃ³w wykonaj nastÄpujÄce kroki:",
        sheet_tip_line_4: "1. Przekonwertuj zapis nutowy na plik MIDI uÅ¼ywajÄc MuseScore lub podobnego programu. Nazwij oba pliki tak samo",
        sheet_tip_line_5: "2. Wczytaj plik MIDI oraz zapis nutowy",

        //songslist
        name: "TytuÅ",
        date: "Data",
        action: "Akcja",
        songs_per_page: "Nut na stronÄ",
        total_songs: "ÅÄcznie nut: ",

        //sequences
        sequence: "Sekwencja",
        active_sequence: "Aktywna sekwencja",
        color: "Kolor",
        next_step: "NastÄpny krok",
        press_spacebar:  "WciÅnij spacjÄ",
        add: "Dodaj",
        remove: "UsuÅ",
        step: "Krok",
        activation_method:  "Metoda aktywacji",
        button_press: "WciÅniÄcie przycisku",
        sustain_pedal: "PedaÅ Sustain",
        portamento_pedal:  "PedaÅ Portamento",
        sostuneto_pedal: "PedaÅ Sostuneto",
        soft_pedal: "PedaÅ Soft",
        next_step_value:  "WartoÅÄ nastÄpnego kroku",
        next_step_tip_line_1: "WartoÅÄ nastÄpnego kroku odpowiada za to czy nastÄpny krok aktywuje siÄ przy wciÅniÄciu lub puszczeniu pedaÅa.",
        next_step_tip_line_2: "Dla przykÅadu: jeÅli chcesz zmieniÄ ustawienia po peÅnym wciÅniÄciu prawego pedaÅa ustaw wartoÅÄ nastÄpnego kroku na 126",
        next_step_tip_line_3: "(127 to maksymalna wartoÅÄ przy wciÅniÄtym pedale)",
        next_step_tip_line_4: "Ustaw wartoÅÄ na -1, aby zmieniÄ ustawienia za pomocÄ pedaÅu, w peÅni go zwalniajÄc.",
        sequence_name: "Nazwa sekwencji",
        save_current_settings_to_step: "Zapisz ustawienia aktualnego kroku",

        //ports
        for_lighting_leds: "By podÅwietla klawisze grajÄc ustaw swoje pianino jako aktywny port",
        set_your_synthesia: "Ustaw port Synthesii uczÄc siÄ graÄ",
        active: "Aktywny",
        switch: "ZamieÅ",
        secondary: "ZastÄpczy port",
        used_for_sound: "UÅ¼ywany przy odtwarzaniu MIDI",
        list_of_ports: "Lista portÃ³w i poÅÄczeÅ",
        disconnect_ports: "RozÅÄcz porty",
        restart_rtp: "Zrestartuj usÅugÄ RTP MIDI",
        midi_events: "WiadomoÅci MIDI",
        show_midi_events: "PokaÅ¼ wiadomoÅci MIDI (moÅ¼e obniÅ¼yÄ wydajnoÅÄ)",

        //network
        connected_wifi: "PoÅÄczone Wi-Fi",
        disconnect_wifi_and_create_hotspot: "RozÅÄcz Wi-Fi i utwÃ³rz Hotspot",
        disconnecting_warning_line_1: "RozÅÄczenie z Wi-Fi rozpocznie proces tworzenia Hotspota. MoÅ¼e to zajÄÄ kilka minut",
        disconnecting_warning_line_2: "By uzyskaÄ dostÄp do interfejsu, naleÅ¼y najpierw poÅaczyÄ siÄ z Hotspotem",
        wifi_list: "Lista dostÄpnych Wi-Fi",
        local_address: "Adres Lokalny",
        change_address: "ZmieÅ Adres",
        enter_local_address: "WprowadÅº nowy adres lokalny",
        hotspot_password_section_title: "HasÅo Hotspota",
        enter_hotspot_password: "WprowadÅº nowe hasÅo hotspota (min. 8 znakÃ³w)",
        change_hotspot_password_button: "ZmieÅ HasÅo Hotspota",
        show_password: "PokaÅ¼ HasÅo",
        hide_password: "Ukryj HasÅo",
        password_too_short: "HasÅo musi mieÄ co najmniej 8 znakÃ³w.",
        changing_hotspot_password_message: "Zmiana hasÅa hotspota... ProszÄ czekaÄ.",
        hotspot_password_changed_success: "HasÅo hotspota zostaÅo zmienione! Hotspot zostanie zrestartowany.",
        hotspot_password_changed_fail: "Nie udaÅo siÄ zmieniÄ hasÅa hotspota.",
        hotspot_password_changed_fail_error: "BÅÄd podczas zmiany hasÅa hotspota. SprÃ³buj ponownie.",
        hotspot_password_change_note: "Uwaga: Zmiana hasÅa wÅÄczy hotspot, jeÅli nie jest juÅ¼ aktywny, i uruchomi go ponownie, rozÅÄczajÄc obecnych uÅ¼ytkownikÃ³w.",
        password_strength_weak: "SÅabe",
        password_strength_medium: "Årednie",
        password_strength_strong: "Silne",
        password_strength_very_strong: "Bardzo Silne",
        password_too_short_strength: "Za krÃ³tkie",

        //ledanimations
        stop_animation: "Zatrzymaj animacje",
        led_animation_on_idle: "Animacja w trakcie bezczynnoÅci",
        after_minutes: "po ilu minutach (0 - nigdy)",
        animation_type: "Typ animacji",

        //homepage
        advanced_mode: "Tryb zaawansowany",
        system_cpu_usage: "UÅ¼ycie procesora przez system",
        ram_usage: "UÅ¼ycie RAM",
        disk_usage: "UÅ¼ycie dysku",
        bandwidth_usage: "Wykorzystanie sieci",
        process_cpu_usage: "UÅ¼ycie procesora przez aplikacje",
        metronome: "Metronom",
        beats_per_measure: "UderzeÅ na takt",
        volume: "GÅoÅnoÅÄ",
        color_mode: "Tryb koloru",
        single: "Pojedynczy",
        light_mode: "Tryb Åwiecenia",
        normal: "Normalny",
        brightness: "JasnoÅÄ",
        backlight_brightness: "JasnoÅÄ podÅwietlenia",
        input_port: "Port wejÅcia",
        playback_port: "Port odtwarzania",
        cover_state: "Stan pokrywy",
        screen: "Ekran",
        reset_settings_to_default: "PrzywrÃ³Ä ustawienia domyÅlne",
        confirm: "PotwierdÅº",
        restart_rpi: "Zrestartuj RPi",
        restart_visualizer: "Zrestartuj Visualizator",
        power_off: "WyÅÄcz",
        update_visualizer: "Aktualizuj Visualizator",
        connect_ports: "PoÅÄcz Porty",
        clean_led_strip: "WyczyÅÄ taÅmÄ LED",
        logs: "Logi",
        show_last: "PokaÅ¼ ostatnie",
        lines: "linii",
        reinitialize_network_on_boot: "Zainicjuj ponownie sieÄ podczas uruchamiania",
        required_for_some_routers: "Wymagane dla niektÃ³rych routerÃ³w. WyÅÄczenie tej opcji przyspieszy uruchomienie, ale moÅ¼e powodowaÄ problemy z poÅÄczeniem",

        //dynamic content
        incorrect_password: "JeÅli wprowadzone zostaÅo niepoprawne hasÅo, moÅ¼e minÄÄ kilka minut zanim hotspot zostanie ponownie utworzony." ,
        if_the_hotspot: "JeÅli Hotspot nie pojawi siÄ po 5 minutach, proszÄ zrestartowaÄ urzÄdzenie",
        connect: "PoÅÄcz",
        session_summary: "Podsumowanie Gry",
        right_hand_mistakes: "BÅÄdy Prawej RÄki",
        right_hand_delay: "DÅugi Czas Reakcji - Prawa RÄka",
        left_hand_mistakes: "BÅÄdy Lewej RÄki",
        left_hand_delay: "DÅugi Czas Reakcji - Lewa RÄka",
        right_hand_notes: "Nuty Prawej RÄki",
        left_hand_notes: "Nuty Lewej RÄki",
        right_hand_mistakes: "BÅÄdy Prawej RÄki",
        left_hand_mistakes: "BÅÄdy Lewej RÄki",
        note_timing_vs_delay: "Synchronizacja Nut vs OpÃ³Åºnienie",
        chart_tooltip_label_delay: "OpÃ³Åºnienie",
        chart_tooltip_label_at_time: "O",
        mistakes: "BÅÄd Czasowy",
        max_acceptaple_delay: "Maksymalne Dozwolone OpÃ³Åºnienie",
        time: "Czas MIDI (sekundy)",
        delay: "OpÃ³Åºnienie (sekundy)",
        reset_zoom: "Resetuj",
        learning_status: "Rozpocznij Nauczanie",

        // score and profiles
        score: "Wynik",
        combo: "Kombo",
        multiplier: "MnoÅ¼nik",

        profile_label: "Profil",
        create_profile: "UtwÃ³rz profil",
        show_score: "PokaÅ¼ wynik",
        show_summary: "PokaÅ¼ podsumowanie",
        highscore: "NajwyÅ¼szy wynik",
        new_profile: "profil nowy", 

        
    },

    fr: {
        //index
        loading: "Chargement...",
        home: "Accueil",
        led_settings: "ParamÃ¨tres LED",
        songs: "Chansons",
        sequences: "SÃ©quences",
        ports_settings: "ParamÃ¨tres des Ports",
        led_animations: "Animations LED",
        wifi: "Wi-Fi",
        switch_ports: "Ports de commutation",
        view_on_github: "Voir sur GitHub",
        join_discord: "Rejoindre le serveur Discord",

        //ledcolor
        led_color: "Couleur LED",
        multicolor: "Multicolore",
        rainbow_colors: "Couleurs d'arc-en-ciel",
        speed: "Vitesse",
        gradient: "DÃ©gradÃ©",
        scale_coloring: "Coloration d'Ã©chelle",
        velocity_rainbow: "Arc-en-ciel de vitesse",

        offset:  "DÃ©calage",
        scale: "Ãchelle",
        timeshift: "DÃ©calage temporel",
        scale_percent: "Ãchelle %",
        curve_percent: "Courbe %",
        slow_color: "Couleur lente",
        fast_color: "Couleur rapide",
        max_notes: "Notes maximales",
        period_in_seconds: "PÃ©riode en secondes",
        start: "DÃ©but",
        end: "Fin",
        color_for_in_scale: "Couleur pour la gamme",
        color_for_not_in_scale: "Couleur pour hors Ã©chelle",
        scale_key: "ClÃ© d'Ã©chelle",

        //lightmode
        fading: "Disparition",
        velocity: "VÃ©locitÃ©",
        instant: "InstantanÃ©",
        very_fast: "TrÃ¨s rapide",
        fast: "Rapide",
        medium: "Moyenne",
        slow: "Lent",
        very_slow: "TrÃ¨s lent",

        //ledsettings
        backlight: "RÃ©tro-Ã©clairage",
        sides_colors:  "Couleurs latÃ©rales",
        off: "ArrÃªt",
        same_as_led_color: "Identique Ã  la couleur LED",
        rgb: "RGB",
        adjustments: "Ajustements",
        skipped_notes: "Notes ignorÃ©es",
        finger_based_ignore: "Doigt basÃ©: ignore les notes avec informations sur quelle main Ã  jouer",
        normal_ignore_all_other: "Normal: ignore toutes les autres notes",
        none: "Aucun",
        finger_based: "Doigt basÃ©",
        reverse: "Inverse",
        inverted: "InversÃ©",
        shift: "DÃ©calage",
        led_count: "Nombre de LED",
        leds_per_meter: "Leds par mÃ¨tre",
        led_note_offsets: "DÃ©calages de note LED",
        shift_notes_for_better_alignment: "Ajuster les positions des LED pour un meilleur alignement",
        light_number_means: "NumÃ©ro de note : 72, DÃ©calage : 2 : Pour les notes supÃ©rieures Ã  72, les LED se dÃ©calent de 2 positions vers l'arriÃ¨re (vers les notes infÃ©rieures)",
        light_number: "NumÃ©ro de note",
        note_offset: "DÃ©calage des notes",
        disable_backlight_on_idle: "DÃ©sactiver le rÃ©troÃ©clairage en veille",

        //songs
        status: "Statut",
        start_recording: "Commencer l'enregistrement",
        starting: "DÃ©marrage",
        stop_and_save: "ArrÃªtez et Sauvegardez",
        cancel_recording: "Annuler l'enregistrement",
        canceling:  "Annulation",
        upload_songs: "TÃ©lÃ©chargez des chansons",
        drag_and_drop_midi: "DÃ©posez le fichier midi ici",
        or_click_to_choose: "ou cliquez pour choisir les fichiers Ã  tÃ©lÃ©charger",
        play_on_piano: "Jouer au piano",
        stop: "ArrÃªter",
        learning_status: "Commencer l'apprentissage",
        stop_learning: "ArrÃªter d'apprendre",
        loop: "Boucle",
        practice: "Pratique",
        melody: "MÃ©lodie",
        rhythm: "Rythme",
        listen:  "Ãcoutez",
        tempo:  "Tempo",
        hands: "Mains",
        both: "Les deux",
        right: "Droite",
        left: "Gauche",
        mute_hands: "Mains muettes",
        wrong_notes: "Notes fausses",
        disabled: "DÃ©sactivÃ©",
        enabled: "ActivÃ©",
        future_notes: "Notes futures",
        start_point: "Point de dÃ©part",
        set_the_current_track_time: "RÃ©glez l'heure de la piste actuelle comme dÃ©but de boucle",
        end_point: "Fin de boucle",
        set_the_current_track_time_as_the_loop_end: "RÃ©glez l'heure de la piste actuelle comme fin de boucle",
        left_hand_color: "Couleur main gauche",
        right_hand_color: "Couleur main droite",
        songs_list: "Liste des chansons",
        getting_songs_list: "Obtenir la liste des chansons",
        number_of_mistakes: "Nombre d'erreurs pour redÃ©marrer la boucle (0 - jamais)",

        //sheetmusic
        load_custom_sheet: "Charger la feuille personnalisÃ©e",
        offset_ms: "DÃ©calage (ms)",
        sheet_tip_line_1: "Si la conversion automatique ne rÃ©pond pas Ã  vos attentes, vous pouvez charger votre propre notation musicale.",
        sheet_tip_line_2: "La partie en surbrillance de la notation musicale est uniquement un indicateur approximatif. Utilisez l'outil de dÃ©calage pour amÃ©liorer la synchronisation.",
        sheet_tip_line_3: "Pour obtenir le meilleur rÃ©sultat, faites ce qui suit :",
        sheet_tip_line_4: "1. Convertissez votre notation musicale en un fichier midi en utilisant Musescore ou un programme similaire, nommez-le comme le fichier midi que vous souhaitez charger. (ex: ma_musique.mid et ma_musique.xml)",
        sheet_tip_line_5: "2. TÃ©lÃ©chargez le fichier midi et le fichier de notation musicale.",

        //songslist
        name: "Nom",
        date: "Date",
        action: "Action",
        songs_per_page: "Chansons par page",
        total_songs: "Total des chansons: ",

        //sequences
        sequence: "SÃ©quence",
        active_sequence: "SÃ©quence active",
        color: "Couleur",
        next_step: "Prochaine Ã©tape",
        press_spacebar:  "Appuyez sur espace",
        add: "Ajouter",
        remove: "Retirer",
        step: "Ãtape",
        activation_method:  "MÃ©thode d'activation",
        button_press: "Appui sur bouton",
        sustain_pedal: "PÃ©dale de sustain",
        portamento_pedal:  "PÃ©dale de portamento",
        sostuneto_pedal: "PÃ©dale de sostenuto",
        soft_pedal: "PÃ©dale douce",
        next_step_value:  "Valeur de l'Ã©tape suivante",
        next_step_tip_line_1: "Cette valeur dÃ©termine si l'Ã©tape suivante est activÃ©e lorsque vous appuyez ou relÃ¢chez la pÃ©dale.",
        next_step_tip_line_2: "Par exemple, si vous souhaitez changer les paramÃ¨tres aprÃ¨s avoir complÃ¨tement appuyÃ© sur la pÃ©dale Sostenuto, vous devez le dÃ©finir Ã  126",
        next_step_tip_line_3: "(127 est la valeur maximale lorsque la pÃ©dale est complÃ¨tement enfoncÃ©e).",
        next_step_tip_line_4: "RÃ©glez la valeur Ã  -1 pour changer les paramÃ¨tres en relÃ¢chant complÃ¨tement la pÃ©dale.",
        sequence_name: "Nom de la sÃ©quence",
        save_current_settings_to_step: "Enregistrer les paramÃ¨tres actuels Ã  l'Ã©tape",

        //ports
        for_lighting_leds: "Pour Ã©clairer les LED avec votre clavier, dÃ©finissez votre port de piano comme entrÃ©e active.",
        set_your_synthesia: "DÃ©finissez votre port Synthesia pour le mode d'apprentissage.",
        active: "Actif",
        switch: "Switch",
        secondary: "Secondaire",
        used_for_sound: "UtilisÃ© pour le son lors de la lecture d'un fichier midi.",
        list_of_ports: "Liste des ports et connexions",
        disconnect_ports: "DÃ©connecter les ports",
        restart_rtp: "RedÃ©marrez le service RTP MIDI",
        midi_events: "ÃvÃ©nements MIDI",
        show_midi_events: "Afficher les Ã©vÃ©nements midi (peut dÃ©grader les performances)",

        //network
        connected_wifi: "Wi-Fi connectÃ©",
        disconnect_wifi_and_create_hotspot: "DÃ©connecter le Wi-Fi et crÃ©er un hotspot",
        disconnecting_warning_line_1: "La dÃ©connexion du Wi-Fi commencera le processus de crÃ©ation d'un hotspot. Cela peut prendre un moment.",
        disconnecting_warning_line_2: "Vous devrez vous connecter au nouveau hotspot crÃ©Ã© pour accÃ©der Ã  nouveau Ã  l'interface Web.",
        wifi_list: "Liste Wi-Fi",
        local_address: "Adresse Locale",
        change_address: "Modifier l'Adresse",
        enter_local_address: "Saisir nouvelle adresse locale",
        hotspot_password_section_title: "Mot de passe du Hotspot",
        enter_hotspot_password: "Saisir nouveau mot de passe du hotspot (8 car. min)",
        change_hotspot_password_button: "Changer Mot de Passe Hotspot",
        show_password: "Afficher Mot de Passe",
        hide_password: "Masquer Mot de Passe",
        password_too_short: "Le mot de passe doit comporter au moins 8 caractÃ¨res.",
        changing_hotspot_password_message: "Changement du mot de passe du hotspot... Veuillez patienter.",
        hotspot_password_changed_success: "Mot de passe du hotspot changÃ© avec succÃ¨s ! Le hotspot va redÃ©marrer.",
        hotspot_password_changed_fail: "Ãchec du changement de mot de passe du hotspot.",
        hotspot_password_changed_fail_error: "Erreur lors du changement de mot de passe du hotspot. Veuillez rÃ©essayer.",
        hotspot_password_change_note: "Remarque : La modification du mot de passe activera le hotspot s'il n'est pas dÃ©jÃ  actif et le redÃ©marrera, dÃ©connectant les utilisateurs actuels.",
        password_strength_weak: "Faible",
        password_strength_medium: "Moyen",
        password_strength_strong: "Fort",
        password_strength_very_strong: "TrÃ¨s Fort",
        password_too_short_strength: "Trop court",

        //ledanimations
        stop_animation: "ArrÃªter l'animation",
        led_animation_on_idle: "Animation LED en veille",
        after_minutes: "aprÃ¨s minutes (0 - jamais)",
        animation_type: "Type d'animation",


        //homepage
        advanced_mode: "Mode avancÃ©",
        system_cpu_usage: "Utilisation du CPU du systÃ¨me",
        ram_usage: "Utilisation de la RAM",
        disk_usage: "Utilisation du disque",
        bandwidth_usage: "Utilisation de la bande passante",
        process_cpu_usage: "Utilisation du CPU par le processus",
        metronome: "MÃ©tronome",
        beats_per_measure: "Bats par mesure",
        volume: "Volume",
        color_mode: "Mode couleur",
        single: "Unique",
        light_mode: "Mode lumiÃ¨re",
        normal: "Normal",
        brightness: "LuminositÃ©",
        backlight_brightness: "LuminositÃ© du rÃ©tro-Ã©clairage",
        input_port: "Port d'entrÃ©e",
        playback_port: "Port de lecture",
        cover_state: "Ãtat de la couverture",
        screen: "Ãcran",
        reset_settings_to_default: "RÃ©initialiser les paramÃ¨tres par dÃ©faut",
        confirm: "Confirmer",
        restart_rpi: "RedÃ©marrer RPi",
        restart_visualizer: "RedÃ©marrer le visualiseur",
        power_off: "Ãteindre",
        update_visualizer: "Mettre Ã  jour le visualiseur",
        connect_ports: "Connecter les ports",
        clean_led_strip: "Nettoyer la bande LED",
        logs: "Logs",
        show_last: "Voir dernier",
        lines: "lignes",
        reinitialize_network_on_boot: "RÃ©initialiser le rÃ©seau au dÃ©marrage",
        required_for_some_routers: "NÃ©cessaire pour certains routeurs. DÃ©sactiver cette option accÃ©lÃ©rera le dÃ©marrage, mais cela peut entraÃ®ner des problÃ¨mes de connexion",


        //dynamic content
        incorrect_password: "Si un mot de passe incorrect est entrÃ©, il peut falloir quelques minutes pour que le hotspot soit rÃ©tabli.",
        if_the_hotspot: "Si le hotspot n'apparaÃ®t pas aprÃ¨s 5 minutes, veuillez redÃ©marrer l'appareil",
        connect: "Connecter",
        
        
        
        session_summary: "RÃ©sumÃ© de la Partie",
        right_hand_mistakes: "Erreurs de la Main Droite",
        right_hand_delay: "Temps De RÃ©action Long - Main Droite",
        left_hand_mistakes: "Erreurs de la Main Gauche",
        left_hand_delay: "Temps De RÃ©action Long - Main Gauche",
        right_hand_notes: "Notes de la Main Droite",
        left_hand_notes: "Notes de la Main Gauche",
        right_hand_mistakes: "Erreurs de la Main Droite",
        left_hand_mistakes: "Erreurs de la Main Gauche",
        note_timing_vs_delay: "Synchronisation des Notes vs DÃ©lai",
        chart_tooltip_label_delay: "DÃ©lai",
        chart_tooltip_label_at_time: "Ã",
        mistakes: "Erreur de Synchronisation",
        max_acceptaple_delay: "DÃ©lai Maximum AutorisÃ©",
        time: "Temps MIDI (secondes)",
        delay: "DÃ©lai (secondes)",
        reset_zoom: "RÃ©initialiser",
        learning_status: "Commencer l'Apprentissage",

        // score and profiles
        score: "RÃ©sultat",
        combo: "Combo",
        multiplier: "Multiplicateur",

        profile_label: "Profil",
        create_profile: "CrÃ©er un profil",
        show_score: "Afficher le score",
        show_summary: "Afficher le rÃ©sumÃ©",
        highscore: "Meilleur score",
        new_profile: "nouveau profil"

        
    },

    de: {
        //index
        loading: "LÃ¤dt...",
        home: "Startseite",
        led_settings: "LED Einstellungen",
        songs: "Songs",
        sequences: "Sequenzen",
        ports_settings: "Port Einstellungen",
        led_animations: "LED Animationen",
        wifi: "Wi-Fi",
        switch_ports: "Ports wechseln",
        view_on_github: "Auf GitHub ansehen",
        join_discord: "Discord-Server beitreten",

        //ledcolor
        led_color: "LED Farbe",
        multicolor: "Mehrfarbig",
        rainbow_colors: "Regenbogen Farben",
        speed: "Geschwindigkeit",
        gradient: "Verlauf",
        scale_coloring: "SkalenfÃ¤rbung",
        velocity_rainbow: "Velocity-Regenbogen",

        offset:  "Versatz",
        scale: "Skala",
        timeshift: "Zeitverschiebung",
        scale_percent: "Skala %",
        curve_percent: "Kurve %",
        slow_color: "Langsame Farbe",
        fast_color: "Schnelle Farbe",
        max_notes: "Maximal Noten",
        period_in_seconds: "Zeitraum in Sekunden",
        start: "Start",
        end: "Ende",
        color_for_in_scale: "Farbe fÃ¼r skaliert",
        color_for_not_in_scale: "Farbe fÃ¼r nicht skaliert",
        scale_key: "TonschlÃ¼ssel",

        //lightmode
        fading: "Verblassen",
        velocity: "Geschwindigkeit",
        instant: "Sofort",
        very_fast: "Sehr schnell",
        fast: "Schnell",
        medium: "Mittel",
        slow: "Langsam",
        very_slow: "Sehr langsam",

        //ledsettings
        backlight: "Hintergrundbeleuchtung",
        sides_colors:  "Seitenfarben",
        off: "Aus",
        same_as_led_color: "Selbe wie LED Farbe",
        rgb: "RGB",
        adjustments: "Anpassungen",
        skipped_notes: "Ãbersprungene Noten",
        finger_based_ignore: "Fingerverweise ignorieren",
        normal_ignore_all_other: "Normal: Alle anderen ignorieren",
        none: "Keine",
        finger_based: "Fingerbasierend",
        reverse: "Umkehren",
        inverted: "Invertiert",
        shift: "Verschieben",
        led_count: "LED Anzahl",
        leds_per_meter: "LEDs pro Meter",
        led_note_offsets: "LED-Notenversatz",
        shift_notes_for_better_alignment: "LED-Positionen fÃ¼r bessere Ausrichtung anpassen",
        light_number_means: "Notennummer: 72, Versatz: 2: FÃ¼r Noten oberhalb von 72 werden die LEDs um 2 Positionen nach hinten verschoben (in Richtung niedrigerer Noten)",
        light_number: "Notennummer",
        note_offset: "Notenversatz",
        disable_backlight_on_idle: "Deaktivieren Sie die Hintergrundbeleuchtung im Leerlauf",

        //songs
        status: "Status",
        start_recording: "Aufnahme starten",
        starting: "Startet",
        stop_and_save: "Stoppen und Speichern",
        cancel_recording: "Aufnahme abbrechen",
        canceling:  "Wird abgebrochen",
        upload_songs: "Songs hochladen",
        drag_and_drop_midi: "Ziehen und Ablegen von Midi-Datei(en) hier mÃ¶glich",
        or_click_to_choose: "oder klicke zum Hochladen der Datei(en)",
        play_on_piano: "Auf Klavier spielen",
        stop: "Stoppen",
        learning_status: "Lernen starten",
        stop_learning: "Lernen stoppen",
        loop: "Schleife",
        practice: "Ãbung",
        melody: "Melodie",
        rhythm: "Rhythmus",
        listen:  "HÃ¶ren",
        tempo:  "Tempo",
        hands: "HÃ¤nde",
        both: "Beide",
        right: "Rechte",
        left: "Linke",
        mute_hands: "HÃ¤nde stummschalten",
        wrong_notes: "Falsche Noten",
        disabled: "Deaktiviert",
        enabled: "Aktiviert",
        future_notes: "ZukÃ¼nftige Noten",
        start_point: "Startpunkt",
        set_the_current_track_time: "Setze die aktuelle Track-Zeit als Start der Schleife",
        end_point: "Endpunkt",
        set_the_current_track_time_as_the_loop_end: "Setze die aktuelle Track-Zeit als Ende der Schleife",
        left_hand_color: "Farbe linke Hand",
        right_hand_color: "Farbe rechte Hand",
        songs_list: "Songs Liste",
        getting_songs_list: "Songliste bekommen",
        number_of_mistakes: "Anzahl der Fehler, um die Schleife neu zu starten (0 - nie)",

        //sheetmusic
        load_custom_sheet: "Benutzerdefinierte Partitur laden",
        offset_ms: "Versatz (ms)",
        sheet_tip_line_1: "Wenn die automatische Konvertierung nicht Ihren Erwartungen entspricht, kÃ¶nnen Sie Ihre eigene Notenschrift laden.",
        sheet_tip_line_2: "Der hervorgehobene Teil der Musiknotation ist nur ein ungefÃ¤hrer Anhaltspunkt. Verwenden Sie das Offset-Tool, um die Synchronisation zu verbessern.",
        sheet_tip_line_3: "FÃ¼r das beste Ergebnis machen Sie folgendes:",
        sheet_tip_line_4: "1. Konvertieren Sie Ihre Musiknotation in eine Midi-Datei mit Musescore oder einem Ã¤hnlichen Programm, nennen Sie es gleich wie die Midi-Datei, die Sie laden wollen. (z.B. meine_musik.mid und meine_musik.xml)",
        sheet_tip_line_5: "2. Laden Sie die Midi-Datei und die Musiknotationsdatei hoch.",

        //songslist
        name: "Name",
        date: "Datum",
        action: "Action",
        songs_per_page: "Songs pro Seite",
        total_songs: "Total Songs: ",

        //sequences
        sequence: "Sequenz",
        active_sequence: "Aktive Sequenz",
        color: "Farbe",
        next_step: "NÃ¤chster Schritt",
        press_spacebar:  "Leertaste drÃ¼cken",
        add: "HinzufÃ¼gen",
        remove: "Entfernen",
        step: "Schritt",
        activation_method:  "Aktivierungsmethode",
        button_press: "Tastendruck",
        sustain_pedal: "Sustain Pedal",
        portamento_pedal:  "Portamento Pedal",
        sostuneto_pedal: "Sostuneto Pedal",
        soft_pedal: "Weiches Pedal",
        next_step_value:  "NÃ¤chster Schrittwert",
        next_step_tip_line_1: "Dieser Wert entscheidet, ob der nÃ¤chste Schritt aktiviert wird, wenn Sie das Pedal drÃ¼cken oder loslassen.",
        next_step_tip_line_2: "Zum Beispiel, wenn Sie die Einstellungen Ã¤ndern mÃ¶chten, nachdem Sie das Sostenuto-Pedal vollstÃ¤ndig gedrÃ¼ckt haben, sollten Sie es auf 126 setzen",
        next_step_tip_line_3: "(127 ist der maximale Wert, wenn das Pedal vollstÃ¤ndig gedrÃ¼ckt ist).",
        next_step_tip_line_4: "Stellen Sie den Wert auf -1, um die Einstellungen zu Ã¤ndern, indem Sie das Pedal vollstÃ¤ndig loslassen.",
        sequence_name: "Sequenzname",
        save_current_settings_to_step: "Aktuelle Einstellungen in Schritt speichern",

        //ports
        for_lighting_leds: "Um die LEDs mit Ihrer Tastatur zu beleuchten, stellen Sie Ihren Klavierport als aktiven Eingang ein.",
        set_your_synthesia: "Stellen Sie Ihren Synthesia-Port fÃ¼r den Lernmodus ein.",
        active: "Aktiv",
        switch: "Wechseln",
        secondary: "SekundÃ¤r",
        used_for_sound: "Wird fÃ¼r den Klang beim Abspielen einer MIDI-Datei verwendet.",
        list_of_ports: "Liste von Ports und Verbindungen",
        disconnect_ports: "Ports trennen",
        restart_rtp: "RTP MIDI Service neu starten",
        midi_events: "MIDI-Events",
        show_midi_events: "MIDI-Events anzeigen (kann die Leistung beeintrÃ¤chtigen)",

        //network
        connected_wifi: "Verbundenes Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Wi-Fi trennen und Hotspot erstellen",
        disconnecting_warning_line_1: "Das Trennen des Wi-Fi startet den Prozess zum Erstellen eines Hotspots. Das kann eine Weile dauern.",
        disconnecting_warning_line_2: "Sie mÃ¼ssen sich mit dem neu erstellten Hotspot verbinden, um wieder auf die WeboberflÃ¤che zugreifen zu kÃ¶nnen.",
        wifi_list: "Wi-Fi-Liste",
        local_address: "Lokale Adresse",
        change_address: "Adresse Ãndern",
        enter_local_address: "Neue lokale Adresse eingeben",
        hotspot_password_section_title: "Hotspot-Passwort",
        enter_hotspot_password: "Neues Hotspot-Passwort eingeben (min. 8 Zeichen)",
        change_hotspot_password_button: "Hotspot-Passwort Ãndern",
        show_password: "Passwort Anzeigen",
        hide_password: "Passwort Verbergen",
        password_too_short: "Das Passwort muss mindestens 8 Zeichen lang sein.",
        changing_hotspot_password_message: "Hotspot-Passwort wird geÃ¤ndert... Bitte warten.",
        hotspot_password_changed_success: "Hotspot-Passwort erfolgreich geÃ¤ndert! Der Hotspot wird neu gestartet.",
        hotspot_password_changed_fail: "Hotspot-Passwort konnte nicht geÃ¤ndert werden.",
        hotspot_password_changed_fail_error: "Fehler beim Ãndern des Hotspot-Passworts. Bitte erneut versuchen.",
        hotspot_password_change_note: "Hinweis: Das Ãndern des Passworts aktiviert den Hotspot, falls er nicht bereits aktiv ist, und startet ihn neu, wodurch aktuelle Benutzer getrennt werden.",
        password_strength_weak: "Schwach",
        password_strength_medium: "Mittel",
        password_strength_strong: "Stark",
        password_strength_very_strong: "Sehr Stark",
        password_too_short_strength: "Zu kurz",

        //ledanimations
        stop_animation: "Animation stoppen",
        led_animation_on_idle: "LED-Animation im Leerlauf",
        after_minutes: "nach Minuten (0 - niemals)",
        animation_type: "Animationsart",

        //homepage
        advanced_mode: "Erweiterter Modus",
        system_cpu_usage: "Verwendung der System-CPU",
        ram_usage: "Ram-Verwendung",
        disk_usage: "Festplattenverbrauch",
        bandwidth_usage: "Bandbreitennutzung",
        process_cpu_usage: "Verwendung der Prozess-CPU",
        metronome: "Metronom",
        beats_per_measure: "SchlÃ¤ge pro MaÃ",
        volume: "LautstÃ¤rke",
        color_mode: "Farbmodus",
        single: "Einzel",
        light_mode: "Lichtmodus",
        normal: "Normal",
        brightness: "Helligkeit",
        backlight_brightness: "Hintergrundbeleuchtung Helligkeit",
        input_port: "Eingangsport",
        playback_port: "Wiedergabe Port",
        cover_state: "Abdeckungszustand",
        screen: "Bildschirm",
        reset_settings_to_default: "Einstellungen auf Default zurÃ¼cksetzen",
        confirm: "BestÃ¤tigen",
        restart_rpi: "RPi neu starten",
        restart_visualizer: "Visualizer neu starten",
        power_off: "Ausschalten",
        update_visualizer: "Visualizer aktualisieren",
        connect_ports: "Ports verbinden",
        clean_led_strip: "LED-Streifen sÃ¤ubern",
        logs: "Logs",
        show_last: "Letzte anzeigen",
        lines: "Linien",
        reinitialize_network_on_boot: "Netzwerk bei Neustart neu initialisieren",
        required_for_some_routers: "Erforderlich fÃ¼r einige Router. Das Deaktivieren dieser Option beschleunigt den Start, kann jedoch Verbindungsprobleme verursachen",


        //dynamic content
        incorrect_password: "Wenn ein falsches Passwort eingegeben wird, kann es einige Minuten dauern, bis der Hotspot wieder hergestellt ist.",
        if_the_hotspot: "Wenn der Hotspot nach 5 Minuten nicht erscheint, starten Sie bitte das GerÃ¤t neu",
        connect: "Verbinden",


        session_summary: "Spiels Zusammenfassung",
        right_hand_mistakes: "Fehler der rechten Hand",
        right_hand_delay: "Lange Reaktionszeit - Rechte Hand",
        left_hand_mistakes: "Fehler der linken Hand",
        left_hand_delay: "Lange Reaktionszeit - Linke Hand",
        right_hand_notes: "Noten der rechten Hand",
        left_hand_notes: "Noten der linken Hand",
        right_hand_mistakes: "Fehler der rechten Hand",
        left_hand_mistakes: "Fehler der linken Hand",
        note_timing_vs_delay: "Notensynchronisation vs VerzÃ¶gerung",
        chart_tooltip_label_delay: "VerzÃ¶gerung",
        chart_tooltip_label_at_time: "Bei",
        mistakes: "Zeitfehler",
        max_acceptaple_delay: "Maximale zulÃ¤ssige VerzÃ¶gerung",
        time: "MIDI-Zeit (Sekunden)",
        delay: "VerzÃ¶gerung (Sekunden)",
        reset_zoom: "ZurÃ¼cksetzen",
        learning_status: "Lernen starten",

        // score and profiles
        score: "Ergebnis",
        combo: "Combo",
        multiplier: "Multiplikator",

        profile_label: "Profil",
        create_profile: "Profil erstellen",
        show_score: "Punktzahl anzeigen",
        show_summary: "Zusammenfassung anzeigen",
        highscore: "Bestpunktzahl",
        new_profile: "neues Profil",
        
    },

    es: {

        //index
        loading: "Cargando...",
        home: "Inicio",
        led_settings: "Configuraciones LED",
        songs: "Canciones",
        sequences: "Secuencias",
        ports_settings: "ConfiguraciÃ³n de puertos",
        led_animations: "Animaciones LED",
        wifi: "Wi-Fi",
        switch_ports: "Cambiar puertos",
        view_on_github: "Ver en GitHub",
        join_discord: "Unirse al servidor de Discord",

        //ledcolor
        led_color: "Color LED",
        multicolor: "Multicolor",
        rainbow_colors: "Colores del arco iris",
        speed: "Velocidad",
        gradient: "Gradiente",
        scale_coloring: "Escalado de colores",
        velocity_rainbow: "Velocidad del arco iris",

        offset:  "Desplazamiento",
        scale: "Escala",
        timeshift: "Desfase temporal",
        scale_percent: "Porcentaje de escala",
        curve_percent: "Porcentaje de curva",
        slow_color: "Color lento",
        fast_color: "Color rÃ¡pido",
        max_notes: "Notas mÃ¡ximas",
        period_in_seconds: "PerÃ­odo en segundos",
        start: "Inicio",
        end: "Fin",
        color_for_in_scale: "Color en escala",
        color_for_not_in_scale: "Color fuera de escala",
        scale_key: "Clave de escala",

        //lightmode
        fading: "Desvanecimiento",
        velocity: "Velocidad",
        instant: "InstantÃ¡neo",
        very_fast: "Muy rÃ¡pido",
        fast: "RÃ¡pido",
        medium: "Medio",
        slow: "Lento",
        very_slow: "Muy lento",

        //ledsettings
        backlight: "RetroiluminaciÃ³n",
        sides_colors:  "Colores laterales",
        off: "Apagado",
        same_as_led_color: "Igual que el color LED",
        rgb: "RGB",
        adjustments: "Ajustes",
        skipped_notes: "Notas omitidas",
        finger_based_ignore: "Basado en dedos: ignorar las notas con informaciÃ³n sobre quÃ© mano tocar",
        normal_ignore_all_other: "Normal: ignorar todas las demÃ¡s notas",
        none: "Ninguno",
        finger_based: "Basado en dedos",
        reverse: "Revertir",
        inverted: "Invertido",
        shift: "Desplazamiento",
        led_count: "Conteo de LED",
        leds_per_meter: "Leds por metro",
        led_note_offsets: "Desplazamientos de las notas LED",
        shift_notes_for_better_alignment: "Ajustar las posiciones de los LED para una mejor alineaciÃ³n",
        light_number_means: "NÃºmero de nota: 72, Offset: 2: Para las notas superiores a 72, los LED se desplazan 2 posiciones hacia atrÃ¡s (hacia notas mÃ¡s bajas)",
        light_number: "NÃºmero de nota",
        note_offset: "Offset de nota",
        disable_backlight_on_idle: "Desactivar retroiluminaciÃ³n en reposo",

        //songs
        status: "Estado",
        start_recording: "Iniciar grabaciÃ³n",
        starting: "Iniciando",
        stop_and_save: "Detener y guardar",
        cancel_recording: "Cancelar grabaciÃ³n",
        canceling:  "Cancelando",
        upload_songs: "Subir canciones",
        drag_and_drop_midi: "Arrastra y suelta el archivo MIDI aquÃ­",
        or_click_to_choose: "o haz clic para elegir el/los archivo(s) a subir",
        play_on_piano: "Reproducir en el piano",
        stop: "Detener",
        learning_status: "Iniciar aprendizaje",
        stop_learning: "Detener aprendizaje",
        loop: "Bucle",
        practice: "Practicar",
        melody: "MelodÃ­a",
        rhythm: "Ritmo",
        listen:  "Escuchar",
        tempo:  "Tempo",
        hands: "Manos",
        both: "Ambas",
        right: "Derecha",
        left: "Izquierda",
        mute_hands: "Manos en silencio",
        wrong_notes: "Notas incorrectas",
        disabled: "Deshabilitado",
        enabled: "Habilitado",
        future_notes: "Notas futuras",
        start_point: "Punto de inicio",
        set_the_current_track_time: "Establecer el tiempo actual de la pista como el inicio del bucle",
        end_point: "Punto final",
        set_the_current_track_time_as_the_loop_end: "Establecer el tiempo actual de la pista como el final del bucle",
        left_hand_color: "Color de la mano izquierda",
        right_hand_color: "Color de la mano derecha",
        songs_list: "Lista de canciones",
        getting_songs_list: "Obteniendo lista de canciones",
        number_of_mistakes: "NÃºmero de errores para reiniciar el bucle (0 - nunca)",

        //sheetmusic
        load_custom_sheet: "Cargar hoja personalizada",
        offset_ms: "Offset (ms)",
        sheet_tip_line_1: "Si la conversiÃ³n automÃ¡tica no cumple con tus expectativas, puedes cargar tu propia notaciÃ³n musical.",
        sheet_tip_line_2: "La parte resaltada de la notaciÃ³n musical es solo un indicador aproximado. Usa la herramienta de desplazamiento para mejorar la sincronizaciÃ³n.",
        sheet_tip_line_3: "Para obtener el mejor resultado, haz lo siguiente:",
        sheet_tip_line_4: "1. Convierte tu notaciÃ³n musical en un archivo midi usando Musescore o un programa similar, haz que tenga el mismo nombre que el archivo midi que deseas cargar. (Por ejemplo, mi_mÃºsica.mid y mi_mÃºsica.xml)",
        sheet_tip_line_5: "2. Sube el archivo midi y el archivo de notaciÃ³n musical.",

        //songslist
        name: "Nombre",
        date: "Fecha",
        action: "AcciÃ³n",
        songs_per_page: "Canciones por pÃ¡gina",
        total_songs: "Total de canciones:",

        //sequences
        sequence: "Secuencia",
        active_sequence: "Secuencia activa",
        color: "Color",
        next_step: "Siguiente paso",
        press_spacebar:  "Presiona la barra espaciadora",
        add: "Agregar",
        remove: "Eliminar",
        step: "Paso",
        activation_method:  "MÃ©todo de activaciÃ³n",
        button_press: "Presionar el botÃ³n",
        sustain_pedal: "Pedal de sostenido",
        portamento_pedal:  "Pedal de portamento",
        sostuneto_pedal: "Pedal de sostenuto",
        soft_pedal: "Pedal suave",
        next_step_value:  "Valor del siguiente paso",
        next_step_tip_line_1: "Este valor decide si el siguiente paso se activa cuando presionas o sueltas el pedal.",
        next_step_tip_line_2: "Por ejemplo, si quieres cambiar la configuraciÃ³n despuÃ©s de presionar completamente el pedal sostenuto, debes configurarlo en 126",
        next_step_tip_line_3: "(127 es el valor mÃ¡ximo cuando el pedal estÃ¡ completamente presionado).",
        next_step_tip_line_4: "Establece el valor en -1 para cambiar la configuraciÃ³n con tu pedal liberÃ¡ndolo completamente.",
        sequence_name: "Nombre de la secuencia",
        save_current_settings_to_step: "Guardar configuraciÃ³n actual en el paso",

        //ports
        for_lighting_leds: "Para iluminar los LEDs con tu teclado, configura tu puerto de piano como entrada activa.",
        set_your_synthesia: "Configura el puerto de tu Synthesia para el modo de aprendizaje.",
        active: "Activo",
        switch: "Cambiar",
        secondary: "Secundario",
        used_for_sound: "Usado para sonido cuando se reproduce un archivo midi.",
        list_of_ports: "Lista de puertos y conexiones",
        disconnect_ports: "Desconectar los puertos",
        restart_rtp: "Reiniciar servicio RTP MIDI",
        midi_events: "Eventos MIDI",
        show_midi_events: "Mostrar eventos MIDI (puede degradar el rendimiento)",

        //network
        connected_wifi: "Wi-Fi conectado",
        disconnect_wifi_and_create_hotspot: "Desconectar Wi-Fi y crear un punto de acceso",
        disconnecting_warning_line_1: "Desconectarse de Wi-Fi iniciarÃ¡ el proceso de creaciÃ³n de un punto de acceso. Esto puede llevar un momento.",
        disconnecting_warning_line_2: "DeberÃ¡s conectarte al punto de acceso reciÃ©n creado para volver a acceder a la interfaz web.",
        wifi_list: "Lista de Wi-Fi",
        local_address: "DirecciÃ³n Local",
        change_address: "Cambiar DirecciÃ³n",
        enter_local_address: "Ingrese nueva direcciÃ³n local",
        hotspot_password_section_title: "ContraseÃ±a del Hotspot",
        enter_hotspot_password: "Ingrese nueva contraseÃ±a del hotspot (mÃ­n. 8 car.)",
        change_hotspot_password_button: "Cambiar ContraseÃ±a Hotspot",
        show_password: "Mostrar ContraseÃ±a",
        hide_password: "Ocultar ContraseÃ±a",
        password_too_short: "La contraseÃ±a debe tener al menos 8 caracteres.",
        changing_hotspot_password_message: "Cambiando contraseÃ±a del hotspot... Espere por favor.",
        hotspot_password_changed_success: "Â¡ContraseÃ±a del hotspot cambiada con Ã©xito! El hotspot se reiniciarÃ¡.",
        hotspot_password_changed_fail: "No se pudo cambiar la contraseÃ±a del hotspot.",
        hotspot_password_changed_fail_error: "Error al cambiar la contraseÃ±a del hotspot. IntÃ©ntelo de nuevo.",
        hotspot_password_change_note: "Nota: Cambiar la contraseÃ±a habilitarÃ¡ el hotspot si no estÃ¡ activo y lo reiniciarÃ¡, desconectando a los usuarios actuales.",
        password_strength_weak: "DÃ©bil",
        password_strength_medium: "Medio",
        password_strength_strong: "Fuerte",
        password_strength_very_strong: "Muy Fuerte",
        password_too_short_strength: "Demasiado corto",

        //ledanimations
        stop_animation: "Detener animaciÃ³n",
        led_animation_on_idle: "AnimaciÃ³n LED en reposo",
        after_minutes: "despuÃ©s de minutos (0 - nunca)",
        animation_type: "Tipo de animaciÃ³n",

        //homepage
        advanced_mode: "Modo avanzado",
        system_cpu_usage: "Uso de CPU del sistema",
        ram_usage: "Uso de RAM",
        disk_usage: "Uso del disco",
        bandwidth_usage: "Uso de ancho de banda",
        process_cpu_usage: "Uso de CPU del proceso",
        metronome: "MetrÃ³nomo",
        beats_per_measure: "Compases por medida",
        volume: "Volumen",
        color_mode: "Modo color",
        single: "Ãnico",
        light_mode: "Modo de luz",
        normal: "Normal",
        brightness: "Brillo",
        backlight_brightness: "Brillo de la retroiluminaciÃ³n",
        input_port: "Puerto de entrada",
        playback_port: "Puerto de reproducciÃ³n",
        cover_state: "Estado de la tapa",
        screen: "Pantalla",
        reset_settings_to_default: "Restablecer la configuraciÃ³n a la predeterminada",
        confirm: "Confirmar",
        restart_rpi: "Reiniciar RPi",
        restart_visualizer: "Reiniciar visualizador",
        power_off: "Apagar",
        update_visualizer: "Actualizar visualizador",
        connect_ports: "Conectar puertos",
        clean_led_strip: "Limpiar tira de LED",
        logs: "Registros",
        show_last: "Mostrar Ãºltimo",
        lines: "lÃ­neas",
        reinitialize_network_on_boot: "Reiniciar la red al arrancar",
        required_for_some_routers: "Requerido para algunos routers. Desactivar esta opciÃ³n acelerarÃ¡ el inicio, pero puede causar problemas de conexiÃ³n",

        //dynamic content
        incorrect_password: "Si se introduce una contraseÃ±a incorrecta, puede llevar unos minutos restablecer el punto de acceso.",
        if_the_hotspot: "Si el punto de acceso no aparece despuÃ©s de 5 minutos, reinicia el dispositivo, por favor.",
        connect: "Conectar",


        session_summary: "Resumen del Juego",
        right_hand_mistakes: "Errores de la Mano Derecha",
        right_hand_delay: "Tiempo De ReacciÃ³n Largo - Mano Derecha",
        left_hand_mistakes: "Errores de la Mano Izquierda",
        left_hand_delay: "Tiempo De ReacciÃ³n Largo - Mano Izquierda",
        right_hand_notes: "Notas de la Mano Derecha",
        left_hand_notes: "Notas de la Mano Izquierda",
        right_hand_mistakes: "Errores de la Mano Derecha",
        left_hand_mistakes: "Errores de la Mano Izquierda",
        note_timing_vs_delay: "SincronizaciÃ³n de Notas vs Retraso",
        chart_tooltip_label_delay: "Retraso",
        chart_tooltip_label_at_time: "En",
        mistakes: "Error de Tiempo",
        max_acceptaple_delay: "Retraso MÃ¡ximo Permitido",
        time: "Tiempo MIDI (segundos)",
        delay: "Retraso (segundos)",
        reset_zoom: "Restablecer",
        learning_status: "Iniciar Aprendizaje",

        // score and profiles
        score: "Resultado",
        combo: "Combo",
        multiplier: "Multiplicador",

        profile_label: "Perfil",
        create_profile: "Crear perfil",
        show_score: "Mostrar puntuaciÃ³n",
        show_summary: "Mostrar resumen",
        highscore: "PuntuaciÃ³n mÃ¡s alta",
        new_profile: "nuevo perfil",
        
    },

    zh: {
        //index
        loading: "æ­£å¨å è½½...",
        home: "ä¸»é¡µ",
        led_settings: "LEDè®¾ç½®",
        songs: "é³ä¹",
        sequences: "åºå",
        ports_settings: "ç«¯å£è®¾ç½®",
        led_animations: "LEDå¨ç»",
        wifi: "æ çº¿ç½",
        switch_ports: "åæ¢ç«¯å£",
        view_on_github: "å¨GitHubä¸æ¥ç",
        join_discord: "å å¥Discordæå¡å¨",

        //ledcolor
        led_color: "LEDé¢è²",
        multicolor: "å¤è²",
        rainbow_colors: "å½©è¹è²",
        speed: "éåº¦",
        gradient: "æ¸å",
        scale_coloring: "æ åº¦çè²",
        velocity_rainbow: "éåº¦å½©è¹",

        offset:  "åç§»",
        scale: "è§æ¨¡",
        timeshift: "Timeshift",
        scale_percent: "è§æ¨¡%",
        curve_percent: "æ²çº¿%",
        slow_color: "æ¢é¢è²",
        fast_color: "å¿«éé¢è²",
        max_notes: "æå¤§é³ç¬¦æ°",
        period_in_seconds: "å¨æï¼ç§ï¼",
        start: "èµ·å§",
        end: "ç»æ",
        color_for_in_scale: "å¨è§æ¨¡åçé¢è²",
        color_for_not_in_scale: "ä¸å¨è§æ¨¡åçé¢è²",
        scale_key: "è§æ¨¡é®",

        //lightmode
        fading: "è¡°é",
        velocity: "éåº¦",
        instant: "å³æ¶",
        very_fast: "éå¸¸å¿«",
        fast: "å¿«",
        medium: "ä¸­",
        slow: "æ¢",
        very_slow: "éå¸¸æ¢",

        //ledsettings
        backlight: "èå",
        sides_colors:  "è¾¹ç¼é¢è²",
        off: "å³é­",
        same_as_led_color: "ä¸LEDé¢è²ç¸å",
        rgb: "RGB",
        adjustments: "è°æ´",
        skipped_notes: "è·³è¿çé³ç¬¦",
        finger_based_ignore: "åºäºææï¼å¿½ç¥æå³ä½¿ç¨åªåªææ­æ¾çä¿¡æ¯çé³ç¬¦",
        normal_ignore_all_other: "æ­£å¸¸ï¼å¿½ç¥ææå¶ä»é³ç¬¦",
        none: "æ ",
        finger_based: "åºäºææ",
        reverse: "åè½¬",
        inverted: "åç½®",
        shift: "ç§»å¨",
        led_count: "LEDæ°é",
        leds_per_meter: "ä¸ç±³LEDæ°",
        led_note_offsets: "LEDé³ç¬¦åç§»",
        shift_notes_for_better_alignment: "è°æ´LEDä½ç½®ä»¥å®ç°æ´å¥½çå¯¹é½",
        light_number_means: "é³ç¬¦ç¼å·ï¼72ï¼åç§»éï¼2ï¼å¯¹äº72ä»¥ä¸çé³ç¬¦ï¼LEDå°ååç§»å¨2ä¸ªä½ç½®ï¼æåè¾ä½çé³ç¬¦ï¼",
        light_number: "é³ç¬¦ç¼å·",
        note_offset: "é³ç¬¦åç§»",
        disable_backlight_on_idle: "å¾æºæ¶å³é­èå",

        //songs
        status: "ç¶æ",
        start_recording: "å¼å§å½å¶",
        stop_recording: "åæ­¢å½å¶",
        starting: "å¼å§",
        stop_and_save: "åæ­¢å¹¶ä¿å­",
        cancel_recording: "åæ¶å½å¶",
        canceling:  "åæ¶",
        upload_songs: "ä¸ä¼ æ­æ²",
        drag_and_drop_midi: "ææ¾midiæä»¶(s)è³æ­¤",
        or_click_to_choose: "æç¹å»ä»¥éæ©æä»¶(s)ä¸ä¼ ",
        play_on_piano: "ä½¿ç¨é¢ç´æ­æ¾",
        stop: "åæ­¢",
        learning_status: "å¼å§å­¦ä¹ ",
        stop_learning: "åæ­¢å­¦ä¹ ",
        loop: "å¾ªç¯",
        practice: "ç»ä¹ ",
        melody: "æå¾",
        rhythm: "èå¥",
        listen:  "èå¬",
        tempo:  "èå¥",
        hands: "æ",
        both: "ä¸¤åª",
        right: "å³",
        left: "å·¦",
        mute_hands: "éé³æ",
        wrong_notes: "éè¯¯é³ç¬¦",
        disabled: "ç¦ç¨",
        enabled: "å¯ç¨",
        future_notes: "æªæ¥é³ç¬¦",
        start_point: "å¼å§ç¹",
        set_the_current_track_time: "è®¾ç½®å½åæ²ç®æ¶é´ä½ä¸ºå¾ªç¯å¼å§",
        end_point: "ç»æç¹",
        set_the_current_track_time_as_the_loop_end: "è®¾ç½®å½åæ²ç®æ¶é´ä½ä¸ºå¾ªç¯ç»æ",
        left_hand_color: "å·¦æé¢è²",
        right_hand_color: "å³æé¢è²",
        songs_list: "æ­æ²åè¡¨",
        getting_songs_list: "è·åæ­æ²åè¡¨",
        number_of_mistakes: "éæ°å¯å¨å¾ªç¯çéè¯¯æ¬¡æ°ï¼0 - æ°¸ä¸ï¼",

        //sheetmusic
        load_custom_sheet: "å è½½èªå®ä¹ä¹è°±",
        offset_ms: "åç§»ï¼æ¯«ç§ï¼",
        sheet_tip_line_1: "å¦æèªå¨è½¬æ¢ä¸ç¬¦åä½ çææï¼ä½ å¯ä»¥å è½½èªå·±çé³ä¹ç¬¦å·ã",
        sheet_tip_line_2: "ä¹è°±ä¸çªåºæ¾ç¤ºçé¨ååªæ¯ä¸ä¸ªå¤§è´çæç¤ºå¨ãä½¿ç¨åç§»å·¥å·æ¹è¿åæ­¥ã",
        sheet_tip_line_3: "è¦è·å¾æå¥½çç»æï¼è¯·æ§è¡ä»¥ä¸æä½ï¼",
        sheet_tip_line_4: "1. ä½¿ç¨Musescoreæç±»ä¼¼ç¨åºå°ä½ çä¹è°±è½¬æ¢ä¸ºmidiæä»¶ï¼å°å¶å½åä¸ºä½ è¦å è½½çmidiæä»¶çç¸ååç§°ã (ä¾å¦ï¼æçé³ä¹.midåæçé³ä¹.xml)",
        sheet_tip_line_5: "2. ä¸ä¼ midiæä»¶åä¹è°±æä»¶ã",

        //songslist
        name: "åç§°",
        date: "æ¥æ",
        action: "å¨ä½",
        songs_per_page: "æ¯é¡µæ­æ²æ°",
        total_songs: "æ»æ­æ²æ°ï¼",

        //sequences
        sequence: "åºå",
        active_sequence: "æ´»å¨åºå",
        color: "é¢è²",
        next_step: "ä¸ä¸æ­¥",
        press_spacebar:  "æç©ºæ ¼é®",
        add: "æ·»å ",
        remove: "å é¤",
        step: "æ­¥éª¤",
        activation_method:  "æ¿æ´»æ¹æ³",
        button_press: "æä¸æé®",
        sustain_pedal: "å»¶é³è¸æ¿",
        portamento_pedal:  "Portamentoè¸æ¿",
        sostuneto_pedal: "Sostunetoè¸æ¿",
        soft_pedal: "è½¯è¸æ¿",
        next_step_value:  "ä¸ä¸æ­¥å¼",
        next_step_tip_line_1: "è¯¥å¼å³å®ä½ æä¸ææ¾å¼è¸æ¿æ¶æ¯å¦ä¼æ¿æ´»ä¸ä¸æ­¥ã",
        next_step_tip_line_2: "ä¾å¦ï¼å¦æä½ å¸æå¨å®å¨æä¸Sostenutoè¸æ¿åæ¹åè®¾ç½®ï¼åºå°å¶è®¾ä¸º126",
        next_step_tip_line_3: "(å½è¸æ¿å®å¨æä¸æ¶ï¼127æ¯æå¤§å¼)ã",
        next_step_tip_line_4: "å°å¼è®¾ä¸º-1ï¼ä»¥éè¿å®å¨éæ¾ä½ çè¸æ¿æ¥æ¹åè®¾ç½®ã",
        sequence_name: "åºååç§°",
        save_current_settings_to_step: "å°å½åè®¾ç½®ä¿å­å°æ­¥éª¤",

        //ports
        for_lighting_leds: "è¥æ³ç¨ä½ çé®çæ¥ç¹äº®LEDï¼å°ä½ çé¢ç´ç«¯å£è®¾ä¸ºæ´»å¨è¾å¥ã",
        set_your_synthesia: "è®¾ç½®ä½ çSynthesiaå£ä»¥è¿è¡å­¦ä¹ æ¨¡å¼ã",
        active: "æ´»å¨",
        switch: "åæ¢",
        secondary: "æ¬¡è¦",
        used_for_sound: "æ­æ¾midiæä»¶æ¶ç¨äºæ­æ¾å£°é³ã",
        list_of_ports: "ç«¯å£åè¿æ¥åè¡¨",
        disconnect_ports: "æ­å¼ç«¯å£",
        restart_rtp: "éå¯RTP MIDIæå¡",
        midi_events: "MIDIäºä»¶",
        show_midi_events: "æ¾ç¤ºmidiäºä»¶ï¼å¯è½ä¼éä½æ§è½ï¼",

        //network
        connected_wifi: "å·²è¿æ¥Wi-Fi",
        disconnect_wifi_and_create_hotspot: "æ­å¼Wi-Fiå¹¶åå»ºç­ç¹",
        disconnecting_warning_line_1: "æ­å¼Wi-Fiå°å¼å§åå»ºç­ç¹çè¿ç¨ãè¿å¯è½éè¦ä¸äºæ¶é´ã",
        disconnecting_warning_line_2: "ä½ éè¦è¿æ¥å°æ°åå»ºçç­ç¹æè½åæ¬¡è®¿é®ç½ç»æ¥å£ã",
        wifi_list: "Wi-Fiåè¡¨",
        local_address: "æ¬å°å°å",
        change_address: "æ´æ¹å°å",
        enter_local_address: "è¾å¥æ°çæ¬å°å°å",
        hotspot_password_section_title: "ç­ç¹å¯ç ",
        enter_hotspot_password: "è¾å¥æ°çç­ç¹å¯ç ï¼è³å°8ä¸ªå­ç¬¦ï¼",
        change_hotspot_password_button: "æ´æ¹ç­ç¹å¯ç ",
        show_password: "æ¾ç¤ºå¯ç ",
        hide_password: "éèå¯ç ",
        password_too_short: "å¯ç å¿é¡»è³å°åå«8ä¸ªå­ç¬¦ã",
        changing_hotspot_password_message: "æ­£å¨æ´æ¹ç­ç¹å¯ç ...è¯·ç¨åã",
        hotspot_password_changed_success: "ç­ç¹å¯ç å·²æåæ´æ¹ï¼ç­ç¹å°éæ°å¯å¨ã",
        hotspot_password_changed_fail: "æ´æ¹ç­ç¹å¯ç å¤±è´¥ã",
        hotspot_password_changed_fail_error: "æ´æ¹ç­ç¹å¯ç æ¶åºéãè¯·éè¯ã",
        hotspot_password_change_note: "æ³¨æï¼æ´æ¹å¯ç å°å¯ç¨ç­ç¹ï¼å¦æå°æªæ¿æ´»ï¼ï¼å¹¶ä¼éæ°å¯å¨å®ï¼ä»èæ­å¼å½åç¨æ·çè¿æ¥ã",
        password_strength_weak: "å¼±",
        password_strength_medium: "ä¸­",
        password_strength_strong: "å¼º",
        password_strength_very_strong: "éå¸¸å¼º",
        password_too_short_strength: "å¤ªç­",

        //ledanimations
        stop_animation: "åæ­¢å¨ç»",
        led_animation_on_idle: "LEDé²ç½®å¨ç»",
        after_minutes: "å åéåï¼0 - ä»ä¸ï¼",
        animation_type: "å¨ç»ç±»å",

        //homepage
        advanced_mode: "é«çº§æ¨¡å¼",
        system_cpu_usage: "ç³»ç»CPUä½¿ç¨",
        ram_usage: "åå­ä½¿ç¨",
        disk_usage: "ç£çä½¿ç¨",
        bandwidth_usage: "å¸¦å®½ä½¿ç¨",
        process_cpu_usage: "è¿ç¨CPUä½¿ç¨",
        metronome: "èæå¨",
        beats_per_measure: "æ¯ä¸å°èçææ°",
        volume: "é³é",
        color_mode: "é¢è²æ¨¡å¼",
        single: "åè²",
        light_mode: "ç¯åæ¨¡å¼",
        normal: "æ­£å¸¸",
        brightness: "äº®åº¦",
        backlight_brightness: "èåäº®åº¦",
        input_port: "è¾å¥ç«¯å£",
        playback_port: "æ­æ¾ç«¯å£",
        cover_state: "çç¶æ",
        screen: "å±å¹",
        reset_settings_to_default: "å°è®¾ç½®éç½®ä¸ºé»è®¤",
        confirm: "ç¡®è®¤",
        restart_rpi: "éæ°å¯å¨RPi",
        restart_visualizer: "éå¯è§è§ææ",
        power_off: "å³é­çµæº",
        update_visualizer: "æ´æ°è§è§ææ",
        connect_ports: "è¿æ¥ç«¯å£",
        clean_led_strip: "æ¸æ´LEDæ¡",
        logs: "æ¥å¿",
        show_last: "æ¾ç¤ºæå",
        lines: "è¡",
        reinitialize_network_on_boot: "å¯å¨æ¶éæ°åå§åç½ç»",
        required_for_some_routers: "å¯¹äºæäºè·¯ç±å¨æ¯å¿éçãç¦ç¨æ­¤éé¡¹å°å å¿«å¯å¨éåº¦ï¼ä½å¯è½ä¼å¯¼è´è¿æ¥é®é¢",

        //dynamic content
        incorrect_password: "å¦æè¾å¥çå¯ç ä¸æ­£ç¡®ï¼å¯è½éè¦å åéæè½éæ°å»ºç«ç­ç¹ã",
        if_the_hotspot: "å¦æç­ç¹å¨5åéåä»æªåºç°ï¼è¯·éæ°å¯å¨è®¾å¤",
        connect: "è¿æ¥",


        session_summary: "æ¸¸ææ»ç»",
        right_hand_mistakes: "å³æéè¯¯",
        right_hand_delay: "ååºæ¶é´é¿ - å³æ",
        left_hand_mistakes: "å·¦æéè¯¯",
        left_hand_delay: "ååºæ¶é´é¿ - å·¦æ",
        right_hand_notes: "å³æé³ç¬¦",
        left_hand_notes: "å·¦æé³ç¬¦",
        right_hand_mistakes: "å³æéè¯¯",
        left_hand_mistakes: "å·¦æéè¯¯",
        note_timing_vs_delay: "é³ç¬¦æ¶åºä¸å»¶è¿",
        chart_tooltip_label_delay: "å»¶è¿",
        chart_tooltip_label_at_time: "å¨",
        mistakes: "æ¶é´éè¯¯",
        max_acceptaple_delay: "æå¤§åè®¸å»¶è¿",
        time: "MIDIæ¶é´ï¼ç§ï¼",
        delay: "å»¶è¿ï¼ç§ï¼",
        reset_zoom: "éç½®",
        learning_status: "å¼å§å­¦ä¹ ",

        // score and profiles
        score: "å¾å",
        combo: "è¿å»",
        multiplier: "åç",

        profile_label: "ä¸ªäººèµæ",
        create_profile: "åå»ºä¸ªäººèµæ",
        show_score: "æ¾ç¤ºå¾å",
        show_summary: "æ¾ç¤ºæ»ç»",
        highscore: "æé«å",
        new_profile: "æ°ä¸ªäººèµæ", 

        
    },

    hi: {
        //index
        loading: "à¤²à¥à¤¡ à¤¹à¥ à¤°à¤¹à¤¾ à¤¹à¥ ...",
        home: "à¤¹à¥à¤®",
        led_settings: "à¤²à¥à¤¡ à¤¸à¥à¤à¤¿à¤à¤",
        songs: "à¤à¤¾à¤¨à¥",
        sequences: "à¤¸à¥à¤à¥à¤µà¥à¤¨à¥à¤¸",
        ports_settings: "à¤ªà¥à¤°à¥à¤ à¤¸à¥à¤à¤¿à¤à¤à¥à¤¸",
        led_animations: "à¤à¤² à¤ à¤¡à¥ à¤à¤¨à¥à¤®à¥à¤¶à¤¨",
        wifi: "Wi-Fi",
        switch_ports: "à¤¸à¥à¤µà¤¿à¤ à¤ªà¥à¤°à¥à¤à¥à¤¸",
        view_on_github: "à¤à¤¿à¤à¤¹à¤¬ à¤ªà¤° à¤¦à¥à¤à¥",
        join_discord: "à¤¡à¤¿à¤¸à¥à¤à¥à¤°à¥à¤¡ à¤¸à¤°à¥à¤µà¤° à¤®à¥à¤ à¤¶à¤¾à¤®à¤¿à¤² à¤¹à¥à¤",

        //ledcolor
        led_color: "à¤à¤²à¤à¤¡à¥ à¤à¤¾ à¤°à¤à¤",
        multicolor: "à¤¬à¤¹à¥à¤°à¤à¤à¥",
        rainbow_colors: "à¤à¤à¤¦à¥à¤°à¤§à¤¨à¥à¤· à¤à¥ à¤°à¤à¤",
        speed: "à¤à¤¤à¤¿",
        gradient: "à¤¢à¤¾à¤²",
        scale_coloring: "à¤ªà¥à¤®à¤¾à¤¨à¥ à¤à¤¾ à¤°à¤à¤",
        velocity_rainbow: "à¤µà¥à¤ à¤à¤à¤¦à¥à¤°à¤§à¤¨à¥à¤·",

        offset:  "à¤à¤«à¤¸à¥à¤",
        scale: "à¤¸à¥à¤à¥à¤²",
        timeshift: "à¤à¤¾à¤à¤®à¤¶à¤¿à¤«à¥à¤",
        scale_percent: "à¤¸à¥à¤à¥à¤² %",
        curve_percent: "à¤µà¤à¥à¤° %",
        slow_color: "à¤§à¥à¤®à¤¾ à¤°à¤à¤",
        fast_color: "à¤¤à¥à¤ à¤°à¤à¤",
        max_notes: "à¤à¤§à¤¿à¤à¤¤à¤® à¤¨à¥à¤à¥à¤¸",
        period_in_seconds: "à¤¸à¥à¤à¤à¤¡ à¤®à¥à¤ à¤à¤µà¤§à¤¿",
        start: "à¤¶à¥à¤°à¥à¤à¤¤",
        end: "à¤à¤à¤¤",
        color_for_in_scale: "à¤¸à¥à¤à¥à¤² à¤®à¥à¤ à¤¹à¥à¤¨à¥ à¤µà¤¾à¤²à¥ à¤°à¤à¤ à¤à¥ à¤²à¤¿à¤",
        color_for_not_in_scale: "à¤¸à¥à¤à¥à¤² à¤®à¥à¤ à¤¨ à¤¹à¥à¤¨à¥ à¤µà¤¾à¤²à¥ à¤°à¤à¤ à¤à¥ à¤²à¤¿à¤",
        scale_key: "à¤¸à¥à¤à¥à¤² à¤à¥à¤à¤à¥",

        //lightmode
        fading: "à¤®à¤à¤¦",
        velocity: "à¤µà¥à¤",
        instant: "à¤¤à¤¤à¥à¤à¤¾à¤²",
        very_fast: "à¤¬à¤¹à¥à¤¤ à¤¤à¥à¤",
        fast: "à¤¤à¥à¤",
        medium: "à¤®à¤§à¥à¤¯à¤®",
        slow: "à¤§à¥à¤®à¤¾",
        very_slow: "à¤¬à¤¹à¥à¤¤ à¤§à¥à¤®à¤¾",

        //ledsettings
        backlight: "à¤¬à¥à¤à¤²à¤¾à¤à¤",
        sides_colors:  "à¤¬à¤à¥ à¤à¥ à¤°à¤à¤",
        off: "à¤¬à¤à¤¦",
        same_as_led_color: "à¤à¤²à¤à¤¡à¥ à¤à¥ à¤°à¤à¤ à¤à¥ à¤¸à¤®à¤¾à¤¨",
        rgb: "à¤à¤°à¤à¥à¤¬à¥",
        adjustments: "à¤¸à¤®à¤¾à¤¯à¥à¤à¤¨",
        skipped_notes: "à¤à¥à¤à¥ à¤¹à¥à¤ à¤¨à¥à¤",
        finger_based_ignore: "à¤«à¤¿à¤à¤à¤° à¤à¤§à¤¾à¤°à¤¿à¤¤: à¤¹à¤¾à¤¥ à¤à¥ à¤¬à¤¾à¤°à¥ à¤®à¥à¤ à¤à¥à¤²à¤¨à¥ à¤à¥ à¤à¤¾à¤¨à¤à¤¾à¤°à¥ à¤µà¤¾à¤²à¥ à¤¨à¥à¤à¥à¤ à¤à¥ à¤à¤¨à¤¦à¥à¤à¤¾ à¤à¤°à¥à¤",
        normal_ignore_all_other: "à¤¨à¤¾à¤°à¥à¤®à¤²: à¤¸à¤­à¥ à¤à¤¨à¥à¤¯ à¤¨à¥à¤à¥à¤ à¤à¥ à¤¨à¤à¤°à¤à¤à¤¦à¤¾à¤ à¤à¤°à¥à¤",
        none: "à¤à¥à¤ à¤¨à¤¹à¥à¤",
        finger_based: "à¤«à¤¿à¤à¤à¤° à¤à¤§à¤¾à¤°à¤¿à¤¤",
        reverse: "à¤ªà¤²à¤à¤¨à¤¾",
        inverted: "à¤à¤²à¥à¤à¤¾",
        shift: "à¤¬à¤¦à¤²à¤¾à¤µ",
        led_count: "à¤à¤²à¤à¤¡à¥ à¤¸à¤à¤à¥à¤¯à¤¾",
        leds_per_meter: "à¤ªà¥à¤°à¤¤à¤¿ à¤®à¥à¤à¤° à¤à¤²à¤à¤¡à¥",
        led_note_offsets: "à¤à¤²à¤à¤¡à¥ à¤¨à¥à¤ à¤à¤«à¤¸à¥à¤",
        shift_notes_for_better_alignment: "à¤¬à¥à¤¹à¤¤à¤° à¤¸à¤à¤°à¥à¤à¤£ à¤à¥ à¤²à¤¿à¤ à¤à¤²à¤à¤¡à¥ à¤à¥ à¤¸à¥à¤¥à¤¿à¤¤à¤¿ à¤¸à¤®à¤¾à¤¯à¥à¤à¤¿à¤¤ à¤à¤°à¥à¤",
        light_number_means: "à¤¨à¥à¤ à¤¨à¤à¤¬à¤°: 72, à¤à¤«à¤¸à¥à¤: 2: 72 à¤¸à¥ à¤à¤ªà¤° à¤à¥ à¤¨à¥à¤à¥à¤¸ à¤à¥ à¤²à¤¿à¤, à¤à¤²à¤à¤¡à¥ 2 à¤¸à¥à¤¥à¤¾à¤¨ à¤ªà¥à¤à¥ (à¤¨à¤¿à¤®à¥à¤¨ à¤¨à¥à¤à¥à¤¸ à¤à¥ à¤à¤°) à¤¶à¤¿à¤«à¥à¤ à¤¹à¥à¤¤à¥ à¤¹à¥à¤",
        light_number: "à¤ªà¤¨à¥à¤ à¤¨à¤à¤¬à¤°",
        note_offset: "à¤§à¥à¤¯à¤¾à¤¨ à¤à¤«à¤¸à¥à¤",
        disable_backlight_on_idle: "à¤¨à¤¿à¤·à¥à¤à¥à¤°à¤¿à¤¯ à¤ªà¤° à¤ªà¥à¤°à¤à¤¾à¤¶ à¤ªà¥à¤°à¤à¥à¤·à¥à¤ªà¤£ à¤¬à¤à¤¦ à¤à¤°à¥à¤",

        //songs
        status: "à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
        start_recording: "à¤°à¤¿à¤à¥à¤°à¥à¤¡à¤¿à¤à¤ à¤¶à¥à¤°à¥ à¤à¤°à¥à¤",
        stop_and_save: "à¤°à¥à¤à¥à¤ à¤à¤° à¤¸à¤¹à¥à¤à¥à¤",
        cancel_recording: "à¤°à¤¿à¤à¥à¤°à¥à¤¡à¤¿à¤à¤ à¤°à¤¦à¥à¤¦ à¤à¤°à¥à¤",
        canceling:  "à¤°à¤¦à¥à¤¦ à¤à¤° à¤°à¤¹à¤¾ à¤¹à¥",
        upload_songs: "à¤à¤¾à¤¨à¥ à¤à¤ªà¤²à¥à¤¡ à¤à¤°à¥à¤",
        drag_and_drop_midi: "à¤®à¤¿à¤¡à¥ à¤«à¤¼à¤¾à¤à¤² (à¤«à¤¼à¤¾à¤à¤²à¥à¤) à¤¯à¤¹à¤¾à¤ à¤à¥à¤à¤à¥à¤ à¤à¤° à¤à¥à¤¡à¤¼à¥à¤",
        or_click_to_choose: "à¤¯à¤¾ à¤à¤ªà¤²à¥à¤¡ à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤«à¤¼à¤¾à¤à¤² (à¤«à¤¼à¤¾à¤à¤²à¥à¤) à¤à¤¾ à¤à¤¯à¤¨ à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤à¥à¤²à¤¿à¤ à¤à¤°à¥à¤",
        play_on_piano: "à¤ªà¤¿à¤à¤¨à¥ à¤ªà¤° à¤à¤²à¤¾à¤à¤",
        stop: "à¤°à¥à¤à¥à¤",
        learning_status: "à¤¸à¥à¤à¤¨à¤¾ à¤¶à¥à¤°à¥ à¤à¤°à¥à¤",
        stop_learning: "à¤¸à¥à¤à¤¨à¤¾ à¤¬à¤à¤¦ à¤à¤°à¥à¤",
        loop: "à¤²à¥à¤ª",
        practice: "à¤à¤­à¥à¤¯à¤¾à¤¸",
        melody: "à¤§à¥à¤¨",
        rhythm: "à¤¤à¤¾à¤²",
        listen:  "à¤¸à¥à¤¨à¥à¤",
        tempo:  "à¤²à¤¯",
        hands: "à¤¹à¤¾à¤¥",
        both: "à¤¦à¥à¤¨à¥à¤",
        right: "à¤¦à¤¾à¤¯à¤¾à¤",
        left: "à¤¬à¤¾à¤¯à¤¾à¤",
        mute_hands: "à¤®à¥à¤¯à¥à¤ à¤¹à¥à¤à¤¡à¥à¤¸",
        wrong_notes: "à¤à¤²à¤¤ à¤¨à¥à¤à¥à¤¸",
        disabled: "à¤µà¤¿à¤à¤²à¤¾à¤à¤",
        enabled: "à¤¸à¤à¥à¤·à¤®",
        future_notes: "à¤­à¤µà¤¿à¤·à¥à¤¯ à¤à¥ à¤¨à¥à¤à¥à¤¸",
        start_point: "à¤ªà¥à¤°à¤¾à¤°à¤à¤­à¤¿à¤ à¤¬à¤¿à¤à¤¦à¥",
        set_the_current_track_time: "à¤²à¥à¤ª à¤¶à¥à¤°à¥à¤à¤¤ à¤à¥ à¤°à¥à¤ª à¤®à¥à¤ à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤à¥à¤°à¥à¤ à¤¸à¤®à¤¯ à¤¸à¥à¤ à¤à¤°à¥à¤",
        end_point: "à¤à¤à¤¤à¤¿à¤® à¤¬à¤¿à¤à¤¦à¥",
        set_the_current_track_time_as_the_loop_end: "à¤²à¥à¤ª à¤à¤à¤¡ à¤à¥ à¤°à¥à¤ª à¤®à¥à¤ à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤à¥à¤°à¥à¤ à¤¸à¤®à¤¯ à¤¸à¥à¤ à¤à¤°à¥à¤",
        left_hand_color: "à¤¬à¤¾à¤à¤ à¤¹à¤¾à¤¥ à¤à¤¾ à¤°à¤à¤",
        right_hand_color: "à¤¦à¤¾à¤à¤ à¤¹à¤¾à¤¥ à¤à¤¾ à¤°à¤à¤",
        songs_list: "à¤à¤¾à¤¨à¥à¤ à¤à¥ à¤¸à¥à¤à¥",
        getting_songs_list: "à¤à¤¾à¤¨à¥à¤ à¤à¥ à¤¸à¥à¤à¥ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤à¤° à¤°à¤¹à¤¾ à¤¹à¥",
        number_of_mistakes: "à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤à¤²à¤¤à¤¿à¤¯à¥à¤ à¤à¥ à¤¸à¤à¤à¥à¤¯à¤¾ (0 - à¤à¤­à¥ à¤¨à¤¹à¥à¤)",

        //sheetmusic
        load_custom_sheet: "à¤à¤¸à¥à¤à¤® à¤¶à¥à¤ à¤²à¥à¤¡ à¤à¤°à¥à¤",
        offset_ms: "à¤à¤«à¤¸à¥à¤ (à¤à¤®à¤à¤¸)",
        sheet_tip_line_1: "à¤¯à¤¦à¤¿ à¤¸à¥à¤µà¤¤à¤ à¤°à¥à¤ªà¤¾à¤à¤¤à¤°à¤£ à¤à¤ªà¤à¥ à¤à¤ªà¥à¤à¥à¤·à¤¾à¤à¤ à¤à¥ à¤ªà¥à¤°à¤¾ à¤¨à¤¹à¥à¤ à¤à¤°à¤¤à¤¾ à¤¹à¥, à¤¤à¥ à¤à¤ª à¤à¤ªà¤¨à¥ à¤¸à¥à¤µà¤¯à¤ à¤à¥ à¤¸à¤à¤à¥à¤¤ à¤¨à¥à¤à¥à¤¶à¤¨ à¤à¥ à¤²à¥à¤¡ à¤à¤° à¤¸à¤à¤¤à¥ à¤¹à¥à¤à¥¤ ",
        sheet_tip_line_2: "à¤¸à¤à¤à¥à¤¤ à¤¨à¥à¤à¥à¤¶à¤¨ à¤à¤¾ à¤à¤¯à¤¨à¤¿à¤¤ à¤­à¤¾à¤ à¤à¥à¤µà¤² à¤à¤ à¤à¤¨à¥à¤®à¤¾à¤¨à¤¿à¤¤ à¤¸à¥à¤à¤ à¤¹à¥à¥¤ à¤¸à¤¿à¤à¤à¥à¤°à¥à¤¨à¤¾à¤à¤à¤¼à¥à¤¶à¤¨ à¤à¥ à¤¬à¥à¤¹à¤¤à¤° à¤à¤°à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤à¤«à¤¸à¥à¤ à¤à¥à¤² à¤à¤¾ à¤à¤ªà¤¯à¥à¤ à¤à¤°à¥à¤à¥¤ ",
        sheet_tip_line_3: "à¤¸à¤°à¥à¤µà¤¶à¥à¤°à¥à¤·à¥à¤  à¤ªà¤°à¤¿à¤£à¤¾à¤® à¤à¥ à¤²à¤¿à¤ à¤¨à¤¿à¤®à¥à¤¨à¤²à¤¿à¤à¤¿à¤¤ à¤à¤°à¥à¤: ",
        sheet_tip_line_4: "1. à¤à¤ªà¤¨à¥ à¤¸à¤à¤à¥à¤¤ à¤¨à¥à¤à¥à¤¶à¤¨ à¤à¥ Musescore à¤¯à¤¾ à¤¸à¤®à¤¾à¤¨ à¤ªà¥à¤°à¥à¤à¥à¤°à¤¾à¤® à¤à¤¾ à¤à¤ªà¤¯à¥à¤ à¤à¤°à¤à¥ à¤®à¤¿à¤¡à¥ à¤«à¤¼à¤¾à¤à¤² à¤®à¥à¤ à¤ªà¤°à¤¿à¤µà¤°à¥à¤¤à¤¿à¤¤ à¤à¤°à¥à¤, à¤à¤¸à¥ à¤à¤¸ à¤®à¤¿à¤¡à¥ à¤«à¤¼à¤¾à¤à¤² à¤à¥ à¤¨à¤¾à¤® à¤¸à¥ à¤¨à¤¾à¤®à¤¿à¤¤ à¤à¤°à¥à¤ à¤à¥ à¤à¤ª à¤²à¥à¤¡ à¤à¤°à¤¨à¤¾ à¤à¤¾à¤¹à¤¤à¥ à¤¹à¥à¤à¥¤ ",
        sheet_tip_line_5: "2. à¤®à¤¿à¤¡à¥ à¤«à¤¼à¤¾à¤à¤² à¤à¤° à¤¸à¤à¤à¥à¤¤ à¤¨à¥à¤à¥à¤¶à¤¨ à¤«à¤¼à¤¾à¤à¤² à¤à¥ à¤à¤ªà¤²à¥à¤¡ à¤à¤°à¥à¤à¥¤ ",

        //songslist
        name: "à¤¨à¤¾à¤®",
        date: "à¤¤à¤¾à¤°à¥à¤",
        action: "à¤à¤¾à¤°à¥à¤¯",
        songs_per_page: "à¤ªà¥à¤°à¤¤à¤¿ à¤ªà¥à¤·à¥à¤  à¤à¤¾à¤¨à¥",
        total_songs: "à¤à¥à¤² à¤à¤¾à¤¨à¥: ",

        //sequences
        sequence: "à¤à¥à¤°à¤®",
        active_sequence: "à¤¸à¤à¥à¤°à¤¿à¤¯ à¤¸à¥à¤à¥à¤µà¥à¤à¤¸",
        color: "à¤°à¤à¤",
        next_step: "à¤à¤à¤²à¤¾ à¤à¤¦à¤®",
        press_spacebar:  "à¤¸à¥à¤ªà¥à¤¸à¤¬à¤¾à¤° à¤¦à¤¬à¤¾à¤à¤",
        add: "à¤à¥à¤¡à¤¼à¥à¤",
        remove: "à¤¹à¤à¤¾à¤à¤",
        step: "à¤à¤¦à¤®",
        activation_method:  "à¤¸à¤à¥à¤°à¤¿à¤¯à¤£ à¤à¤¾ à¤¤à¤°à¥à¤à¤¾",
        button_press: "à¤¬à¤à¤¨ à¤¦à¤¬à¤¾à¤à¤",
        sustain_pedal: "à¤¸à¤à¤à¥à¤°à¤¹à¤£ à¤ªà¥à¤¡à¤²",
        portamento_pedal:  "à¤ªà¥à¤°à¥à¤à¤¾à¤®à¥à¤à¤à¥ à¤ªà¥à¤¡à¤²",
        sostuneto_pedal: "à¤¸à¥à¤·à¥à¤à¥à¤¨à¥à¤à¥ à¤ªà¥à¤¡à¤²",
        soft_pedal: "à¤¸à¥à¤«à¥à¤ à¤ªà¥à¤¡à¤²",
        next_step_value:  "à¤à¤à¤²à¥ à¤à¤¦à¤® à¤à¤¾ à¤®à¥à¤²à¥à¤¯",
        next_step_tip_line_1: "à¤¯à¤¹ à¤®à¤¾à¤¨ à¤¤à¤¯ à¤à¤°à¤¤à¤¾ à¤¹à¥ à¤à¤¿ à¤à¤à¤²à¤¾ à¤à¤¦à¤® à¤¸à¤à¥à¤°à¤¿à¤¯ à¤¹à¥à¤¤à¤¾ à¤¹à¥ à¤à¤¬ à¤à¤ª à¤ªà¥à¤¡à¤² à¤¦à¤¬à¤¾à¤à¤ à¤¯à¤¾ à¤à¥à¤¡à¤¼à¥à¤à¥¤",
        next_step_tip_line_2: "à¤à¤¦à¤¾à¤¹à¤°à¤£ à¤à¥ à¤²à¤¿à¤, à¤à¤à¤° à¤à¤ª à¤ªà¥à¤°à¥ à¤¤à¤°à¤¹ à¤¸à¤à¤à¥à¤°à¤¹à¤£ à¤ªà¥à¤¡à¤² à¤¦à¤¬à¤¾à¤¨à¥ à¤à¥ à¤¬à¤¾à¤¦ à¤¸à¥à¤à¤¿à¤à¤à¥à¤¸ à¤¬à¤¦à¤²à¤¨à¤¾ à¤à¤¾à¤¹à¤¤à¥ à¤¹à¥à¤ à¤¤à¥ à¤à¤ªà¤à¥ à¤à¤¸à¥ 126 à¤ªà¤° à¤¸à¥à¤ à¤à¤°à¤¨à¤¾ à¤à¤¾à¤¹à¤¿à¤",
        next_step_tip_line_3: "(127 à¤ªà¥à¤¡à¤² à¤ªà¥à¤°à¥ à¤¤à¤°à¤¹ à¤¦à¤¬à¤¾à¤ à¤à¤¾à¤¨à¥ à¤ªà¤° à¤à¤§à¤¿à¤à¤¤à¤® à¤®à¤¾à¤¨ à¤¹à¥)à¥¤",
        next_step_tip_line_4: "à¤ªà¥à¤¡à¤² à¤à¥ à¤ªà¥à¤°à¥ à¤¤à¤°à¤¹ à¤à¥à¤¡à¤¼à¤à¤° à¤à¤ªà¤¨à¥ à¤¸à¥à¤à¤¿à¤à¤à¥à¤¸ à¤¬à¤¦à¤²à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤®à¤¾à¤¨ à¤à¥ -1 à¤ªà¤° à¤¸à¥à¤ à¤à¤°à¥à¤à¥¤",
        sequence_name: "à¤à¥à¤°à¤® à¤à¤¾ à¤¨à¤¾à¤®",
        save_current_settings_to_step: "à¤®à¥à¤à¥à¤¦à¤¾ à¤¸à¥à¤à¤¿à¤à¤à¥à¤¸ à¤à¥ à¤à¤¦à¤® à¤ªà¤° à¤¸à¤¹à¥à¤à¥à¤",

        //ports
        for_lighting_leds: "à¤à¤ªà¤¨à¥ à¤à¥à¤¬à¥à¤°à¥à¤¡ à¤à¥ à¤¸à¤¾à¤¥ à¤à¤²à¤à¤¡à¥ à¤à¤²à¤¾à¤¨à¥ à¤à¥ à¤²à¤¿à¤, à¤à¤ªà¤¨à¥ à¤ªà¤¿à¤¯à¤¾à¤¨à¥ à¤ªà¥à¤°à¥à¤ à¤à¥ à¤à¤ à¤¸à¤à¥à¤°à¤¿à¤¯ à¤à¤¨à¤ªà¥à¤ à¤à¥ à¤°à¥à¤ª à¤®à¥à¤ à¤¸à¥à¤ à¤à¤°à¥à¤à¥¤",
        set_your_synthesia: "à¤à¤ªà¤¨à¥ à¤¸à¤¿à¤à¤¥à¥à¤¸à¤¿à¤¯à¤¾ à¤à¥ à¤ªà¥à¤°à¥à¤ à¤à¥ à¤¸à¥à¤à¤¨à¥ à¤à¥ à¤®à¥à¤¡ à¤à¥ à¤²à¤¿à¤ à¤¸à¥à¤ à¤à¤°à¥à¤à¥¤",
        active: "à¤¸à¤à¥à¤°à¤¿à¤¯",
        switch: "à¤¸à¥à¤µà¤¿à¤",
        secondary: "à¤®à¤¾à¤§à¥à¤¯à¤®à¤¿à¤",
        used_for_sound: "à¤®à¤¿à¤¡à¥ à¤«à¤¼à¤¾à¤à¤² à¤à¤²à¤¾à¤¤à¥ à¤¸à¤®à¤¯ à¤§à¥à¤µà¤¨à¤¿ à¤à¥ à¤²à¤¿à¤ à¤à¤ªà¤¯à¥à¤ à¤à¤¿à¤¯à¤¾ à¤à¤¯à¤¾à¥¤",
        list_of_ports: "à¤ªà¥à¤°à¥à¤à¥à¤¸ à¤à¤° à¤à¤¨à¥à¤à¥à¤¶à¤¨ à¤à¥ à¤¸à¥à¤à¥",
        disconnect_ports: "à¤ªà¥à¤°à¥à¤à¥à¤¸ à¤à¥ à¤¡à¤¿à¤¸à¥à¤à¤¨à¥à¤à¥à¤ à¤à¤°à¥à¤",
        restart_rtp: "à¤à¤°à¤à¥à¤ªà¥ à¤®à¤¿à¤¡à¥ à¤¸à¥à¤µà¤¾ à¤à¥ à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤à¤°à¥à¤",
        midi_events: "à¤®à¤¿à¤¡à¥ à¤à¤µà¥à¤à¤",
        show_midi_events: "à¤®à¤¿à¤¡à¥ à¤à¤µà¥à¤à¤ à¤¦à¤¿à¤à¤¾à¤à¤ (à¤ªà¥à¤°à¤¦à¤°à¥à¤¶à¤¨ à¤à¤à¤¾ à¤¸à¤à¤¤à¤¾ à¤¹à¥)",

        //network
        connected_wifi: "à¤µà¤¾à¤-à¤«à¤¾à¤ à¤¸à¥ à¤à¥à¤¡à¤¼à¥",
        disconnect_wifi_and_create_hotspot: "à¤µà¤¾à¤-à¤«à¤¼à¤¾à¤ à¤à¥ à¤¡à¤¿à¤¸à¥à¤à¤¨à¥à¤à¥à¤ à¤à¤°à¥à¤ à¤à¤° à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤¬à¤¨à¤¾à¤à¤",
        disconnecting_warning_line_1: "à¤µà¤¾à¤-à¤«à¤¼à¤¾à¤ à¤¸à¥ à¤¡à¤¿à¤¸à¥à¤à¤¨à¥à¤à¥à¤ à¤¹à¥à¤¨à¥ à¤¸à¥ à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤¬à¤¨à¤¾à¤¨à¥ à¤à¥ à¤ªà¥à¤°à¤à¥à¤°à¤¿à¤¯à¤¾ à¤¶à¥à¤°à¥ à¤¹à¥ à¤à¤¾à¤à¤à¥à¥¤ à¤à¤¸à¤®à¥à¤ à¤¥à¥à¤¡à¤¼à¥ à¤¦à¥à¤° à¤²à¤ à¤¸à¤à¤¤à¥ à¤¹à¥à¥¤",
        disconnecting_warning_line_2: "à¤à¤ªà¤à¥ à¤µà¥à¤¬ à¤à¤à¤à¤°à¤«à¤¼à¥à¤¸ à¤¤à¤ à¤ªà¥à¤¨à¤ à¤ªà¤¹à¥à¤à¤à¤¨à¥ à¤à¥ à¤²à¤¿à¤ à¤¨à¤ à¤¡à¤¿à¤¸à¥à¤à¤¨à¥à¤à¥à¤ à¤¹à¤¾à¤¸à¥à¤ªà¥à¤ à¤¸à¥ à¤à¥à¤¡à¤¼à¤¨à¥ à¤à¥ à¤à¤µà¤¶à¥à¤¯à¤à¤¤à¤¾ à¤¹à¥à¤à¥à¥¤",
        wifi_list: "à¤µà¤¾à¤-à¤«à¤¼à¤¾à¤ à¤¸à¥à¤à¥",
        local_address: "à¤¸à¥à¤¥à¤¾à¤¨à¥à¤¯ à¤ªà¤¤à¤¾",
        change_address: "à¤ªà¤¤à¤¾ à¤¬à¤¦à¤²à¥à¤",
        enter_local_address: "à¤¨à¤¯à¤¾ à¤¸à¥à¤¥à¤¾à¤¨à¥à¤¯ à¤ªà¤¤à¤¾ à¤¦à¤°à¥à¤ à¤à¤°à¥à¤",
        hotspot_password_section_title: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡",
        enter_hotspot_password: "à¤¨à¤¯à¤¾ à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤ à¤à¤°à¥à¤ (à¤¨à¥à¤¯à¥à¤¨à¤¤à¤® 8 à¤à¤à¥à¤·à¤°)",
        change_hotspot_password_button: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¥à¤",
        show_password: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤¿à¤à¤¾à¤à¤",
        hide_password: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤à¤¿à¤ªà¤¾à¤à¤",
        password_too_short: "à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤à¤® à¤¸à¥ à¤à¤® 8 à¤à¤à¥à¤·à¤°à¥à¤ à¤à¤¾ à¤¹à¥à¤¨à¤¾ à¤à¤¾à¤¹à¤¿à¤à¥¤",
        changing_hotspot_password_message: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¤¾ à¤à¤¾ à¤°à¤¹à¤¾ à¤¹à¥... à¤à¥à¤ªà¤¯à¤¾ à¤ªà¥à¤°à¤¤à¥à¤à¥à¤·à¤¾ à¤à¤°à¥à¤à¥¤",
        hotspot_password_changed_success: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¸à¤«à¤²à¤¤à¤¾à¤ªà¥à¤°à¥à¤µà¤ à¤¬à¤¦à¤² à¤¦à¤¿à¤¯à¤¾ à¤à¤¯à¤¾! à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤¹à¥à¤à¤¾à¥¤",
        hotspot_password_changed_fail: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¤¨à¥ à¤®à¥à¤ à¤µà¤¿à¤«à¤²à¥¤",
        hotspot_password_changed_fail_error: "à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¤¤à¥ à¤¸à¤®à¤¯ à¤¤à¥à¤°à¥à¤à¤¿à¥¤ à¤à¥à¤ªà¤¯à¤¾ à¤ªà¥à¤¨à¤ à¤ªà¥à¤°à¤¯à¤¾à¤¸ à¤à¤°à¥à¤à¥¤",
        hotspot_password_change_note: "à¤§à¥à¤¯à¤¾à¤¨ à¤¦à¥à¤: à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¬à¤¦à¤²à¤¨à¥ à¤¸à¥ à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ à¤¸à¤à¥à¤°à¤¿à¤¯ à¤¹à¥ à¤à¤¾à¤à¤à¤¾ à¤¯à¤¦à¤¿ à¤¯à¤¹ à¤ªà¤¹à¤²à¥ à¤¸à¥ à¤¸à¤à¥à¤°à¤¿à¤¯ à¤¨à¤¹à¥à¤ à¤¹à¥ à¤à¤° à¤¯à¤¹ à¤à¤¸à¥ à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤à¤°à¥à¤à¤¾, à¤µà¤°à¥à¤¤à¤®à¤¾à¤¨ à¤à¤ªà¤¯à¥à¤à¤à¤°à¥à¤¤à¤¾à¤à¤ à¤à¥ à¤¡à¤¿à¤¸à¥à¤à¤¨à¥à¤à¥à¤ à¤à¤° à¤¦à¥à¤à¤¾à¥¤",
        password_strength_weak: "à¤à¤®à¤à¤¼à¥à¤°",
        password_strength_medium: "à¤®à¤§à¥à¤¯à¤®",
        password_strength_strong: "à¤®à¤à¤¬à¥à¤¤",
        password_strength_very_strong: "à¤¬à¤¹à¥à¤¤ à¤®à¤à¤¬à¥à¤¤",
        password_too_short_strength: "à¤¬à¤¹à¥à¤¤ à¤à¥à¤à¤¾",

        //ledanimations
        stop_animation: "à¤à¤¨à¤¿à¤®à¥à¤¶à¤¨ à¤°à¥à¤à¥à¤",
        led_animation_on_idle: "à¤à¤à¤¡à¤² à¤ªà¤° à¤à¤²à¤à¤¡à¥ à¤à¤¨à¤¿à¤®à¥à¤¶à¤¨",
        after_minutes: "à¤®à¤¿à¤¨à¤à¥à¤ à¤à¥ à¤¬à¤¾à¤¦ (0 - à¤à¤­à¥ à¤¨à¤¹à¥à¤)",
        animation_type: "à¤à¤¨à¤¿à¤®à¥à¤¶à¤¨ à¤ªà¥à¤°à¤à¤¾à¤°",

        //homepage
        advanced_mode: "à¤à¤¨à¥à¤¨à¤¤ à¤®à¥à¤¡",
        system_cpu_usage: "à¤¸à¤¿à¤¸à¥à¤à¤® à¤¸à¥à¤ªà¥à¤¯à¥ à¤à¤ªà¤¯à¥à¤",
        ram_usage: "à¤°à¥à¤® à¤à¤ªà¤¯à¥à¤",
        disk_usage: "à¤¡à¤¿à¤¸à¥à¤ à¤à¤ªà¤¯à¥à¤",
        bandwidth_usage: "à¤¬à¥à¤à¤¡à¤µà¤¿à¤¡à¥à¤¥ à¤à¤ªà¤¯à¥à¤",
        process_cpu_usage: "à¤ªà¥à¤°à¤à¥à¤°à¤¿à¤¯à¤¾ à¤¸à¥à¤ªà¥à¤¯à¥ à¤à¤ªà¤¯à¥à¤",
        metronome: "à¤®à¥à¤à¥à¤°à¥à¤¨à¥à¤®",
        beats_per_measure: "à¤ªà¥à¤°à¤¤à¤¿ à¤®à¤¾à¤ª à¤§à¤¡à¤¼à¤à¤¨",
        volume: "à¤®à¤¾à¤¤à¥à¤°à¤¾",
        color_mode: "à¤°à¤à¤ à¤®à¥à¤¡",
        single: "à¤¸à¤¿à¤à¤à¤²",
        light_mode: "à¤ªà¥à¤°à¤à¤¾à¤¶ à¤¸à¤à¤¸à¥à¤à¤°à¤£",
        normal: "à¤¸à¤¾à¤®à¤¾à¤¨à¥à¤¯",
        brightness: "à¤à¤®à¤",
        backlight_brightness: "à¤¬à¥à¤à¤²à¤¾à¤à¤ à¤à¤®à¤",
        input_port: "à¤à¤¨à¤ªà¥à¤ à¤ªà¥à¤°à¥à¤",
        playback_port: "à¤ªà¥à¤²à¥à¤¬à¥à¤ à¤ªà¥à¤°à¥à¤",
        cover_state: "à¤à¤µà¤° à¤¸à¥à¤¥à¤¿à¤¤à¤¿",
        screen: "à¤¸à¥à¤à¥à¤°à¥à¤¨",
        reset_settings_to_default: "à¤°à¥à¤¸à¥à¤ à¤¸à¥à¤à¤¿à¤à¤à¥à¤¸ à¤¡à¤¿à¤«à¤¼à¥à¤²à¥à¤ ",
        confirm: "à¤ªà¥à¤·à¥à¤à¤¿ à¤à¤°à¥à¤",
        restart_rpi: "à¤à¤°à¤ªà¥à¤à¤ à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤à¤°à¥à¤",
        restart_visualizer: "à¤µà¤¿à¤à¤¼à¥à¤¯à¥à¤à¤²à¤¾à¤à¤à¤¼à¤° à¤ªà¥à¤¨à¤°à¤¾à¤°à¤à¤­ à¤à¤°à¥à¤",
        power_off: "à¤¬à¤à¤¦ à¤à¤°à¥à¤",
        update_visualizer: "à¤µà¤¿à¤à¤¼à¥à¤¯à¥à¤à¤²à¤¾à¤à¤à¤¼à¤° à¤à¤ªà¤¡à¥à¤ à¤à¤°à¥à¤",
        connect_ports: "à¤ªà¥à¤°à¥à¤à¥à¤¸ à¤à¤¨à¥à¤à¥à¤ à¤à¤°à¥à¤",
        clean_led_strip: "à¤à¤²à¤à¤¡à¥ à¤¸à¥à¤à¥à¤°à¤¿à¤ª à¤¸à¤¾à¤« à¤à¤°à¥à¤",
        logs: "à¤²à¥à¤à¥à¤¸",
        show_last: "à¤à¤à¤¤à¤¿à¤® à¤¦à¤¿à¤à¤¾à¤à¤",
        lines: "à¤²à¤¾à¤à¤¨à¥à¤",
        reinitialize_network_on_boot: "à¤ªà¥à¤°à¤¾à¤°à¤à¤­ à¤ªà¤° à¤¨à¥à¤à¤µà¤°à¥à¤ à¤à¥ à¤ªà¥à¤¨à¤°à¥à¤à¤°à¤à¤­ à¤à¤°à¥à¤à¥¤",
        required_for_some_routers: "à¤à¥à¤ à¤°à¤¾à¤à¤à¤°à¥à¤¸ à¤à¥ à¤²à¤¿à¤ à¤à¤µà¤¶à¥à¤¯à¤ à¤¹à¥à¥¤ à¤à¤¸ à¤µà¤¿à¤à¤²à¥à¤ª à¤à¥ à¤à¤à¥à¤·à¤® à¤à¤°à¤¨à¥ à¤¸à¥ à¤ªà¥à¤°à¤¾à¤°à¤à¤­ à¤à¥ à¤à¤¤à¤¿ à¤¤à¥à¤à¤¼ à¤à¤°à¥à¤à¥, à¤²à¥à¤à¤¿à¤¨ à¤¯à¤¹ à¤à¤¨à¥à¤à¥à¤¶à¤¨ à¤¸à¤®à¤¸à¥à¤¯à¤¾à¤à¤ à¤ªà¥à¤¦à¤¾ à¤à¤° à¤¸à¤à¤¤à¤¾ à¤¹à¥à¥¤",

        //dynamic content
        incorrect_password: "à¤¯à¤¦à¤¿ à¤à¤²à¤¤ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¦à¤°à¥à¤ à¤à¤¿à¤¯à¤¾ à¤à¤¾à¤¤à¤¾ à¤¹à¥, à¤¤à¥ à¤¹à¤¾à¤¸à¥à¤ªà¥à¤ à¤à¥ à¤«à¤¿à¤° à¤¸à¥ à¤¸à¥à¤¥à¤¾à¤ªà¤¿à¤¤ à¤à¤°à¤¨à¥ à¤®à¥à¤ à¤à¥à¤ à¤®à¤¿à¤¨à¤ à¤²à¤ à¤¸à¤à¤¤à¥ à¤¹à¥à¤à¥¤",
        if_the_hotspot: "à¤¯à¤¦à¤¿ à¤¹à¥à¤à¤¸à¥à¤ªà¥à¤ 5 à¤®à¤¿à¤¨à¤ à¤¬à¤¾à¤¦ à¤­à¥ à¤ªà¥à¤°à¤à¤ à¤¨à¤¹à¥à¤ à¤¹à¥à¤¤à¤¾ à¤¹à¥, à¤¤à¥ à¤à¥à¤ªà¤¯à¤¾ à¤à¤ªà¤à¤°à¤£ à¤à¥ à¤ªà¥à¤¨à¤ à¤à¤°à¤à¤­ à¤à¤°à¥à¤",
        connect: "à¤à¥à¤¡à¤¼à¤¨à¥",



        session_summary: "à¤à¥à¤® à¤¸à¤¾à¤°à¤¾à¤à¤¶",
        right_hand_mistakes: "à¤¦à¤¾à¤¹à¤¿à¤¨à¥ à¤¹à¤¾à¤¥ à¤à¥ à¤à¤²à¤¤à¤¿à¤¯à¤¾à¤",
        right_hand_delay: "à¤²à¤à¤¬à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤à¥à¤°à¤¿à¤¯à¤¾ à¤¸à¤®à¤¯ - à¤¦à¤¾à¤¯à¤¾à¤ à¤¹à¤¾à¤¥",
        left_hand_mistakes: "à¤¬à¤¾à¤à¤ à¤¹à¤¾à¤¥ à¤à¥ à¤à¤²à¤¤à¤¿à¤¯à¤¾à¤",
        left_hand_delay: "à¤²à¤à¤¬à¤¾ à¤ªà¥à¤°à¤¤à¤¿à¤à¥à¤°à¤¿à¤¯à¤¾ à¤¸à¤®à¤¯ - à¤¬à¤¾à¤¯à¤¾à¤ à¤¹à¤¾à¤¥",
        right_hand_notes: "à¤¦à¤¾à¤¹à¤¿à¤¨à¥ à¤¹à¤¾à¤¥ à¤à¥ à¤¨à¥à¤à¥à¤¸",
        left_hand_notes: "à¤¬à¤¾à¤à¤ à¤¹à¤¾à¤¥ à¤à¥ à¤¨à¥à¤à¥à¤¸",
        right_hand_mistakes: "à¤¦à¤¾à¤¹à¤¿à¤¨à¥ à¤¹à¤¾à¤¥ à¤à¥ à¤à¤²à¤¤à¤¿à¤¯à¤¾à¤",
        left_hand_mistakes: "à¤¬à¤¾à¤à¤ à¤¹à¤¾à¤¥ à¤à¥ à¤à¤²à¤¤à¤¿à¤¯à¤¾à¤",
        note_timing_vs_delay: "à¤¨à¥à¤ à¤¸à¤®à¤¯ à¤à¤° à¤¦à¥à¤°à¥",
        chart_tooltip_label_delay: "à¤¦à¥à¤°à¥",
        chart_tooltip_label_at_time: "à¤ªà¤°",
        mistakes: "à¤¸à¤®à¤¯ à¤¤à¥à¤°à¥à¤à¤¿",
        max_acceptaple_delay: "à¤à¤§à¤¿à¤à¤¤à¤® à¤à¤¨à¥à¤®à¥à¤¯ à¤¦à¥à¤°à¥",
        time: "MIDI à¤¸à¤®à¤¯ (à¤¸à¥à¤à¤à¤¡)",
        delay: "à¤¦à¥à¤°à¥ (à¤¸à¥à¤à¤à¤¡)",
        reset_zoom: "à¤°à¥à¤¸à¥à¤ à¤à¤°à¥à¤",
        learning_status: "à¤¶à¤¿à¤à¥à¤·à¤¾ à¤¶à¥à¤°à¥ à¤à¤°à¥à¤",

        // score and profiles
        score: "à¤¸à¥à¤à¥à¤°",
        combo: "à¤à¥à¤®à¥à¤¬à¥",
        multiplier: "à¤à¥à¤£à¤¾à¤à¤¾à¤°",

        profile_label: "à¤ªà¥à¤°à¥à¤«à¤¼à¤¾à¤à¤²",
        create_profile: "à¤ªà¥à¤°à¥à¤«à¤¼à¤¾à¤à¤² à¤¬à¤¨à¤¾à¤à¤",
        show_score: "à¤¸à¥à¤à¥à¤° à¤¦à¤¿à¤à¤¾à¤à¤",
        show_summary: "à¤¸à¤¾à¤°à¤¾à¤à¤¶ à¤¦à¤¿à¤à¤¾à¤à¤",
        highscore: "à¤à¤à¥à¤à¤¤à¤® à¤¸à¥à¤à¥à¤°",
        new_profile: "à¤¨à¤¯à¤¾ à¤ªà¥à¤°à¥à¤«à¤¼à¤¾à¤à¤²",
        
    },

    pt: {
        //index
        loading: "Carregando...",
        home: "InÃ­cio",
        led_settings: "ConfiguraÃ§Ãµes de LED",
        songs: "CanÃ§Ãµes",
        sequences: "SequÃªncias",
        ports_settings: "ConfiguraÃ§Ãµes de Portas",
        led_animations: "AnimaÃ§Ãµes de LED",
        wifi: "Wi-Fi",
        switch_ports: "Alterar Portas",
        view_on_github: "Ver no GitHub",
        join_discord: "Participe do servidor Discord",

        offset: "Deslocamento",
        scale: "Escala",
        timeshift: "Remapeamento de Tempo",
        scale_percent: "Escala%",
        curve_percent: "Curva%",
        slow_color: "Cor lenta",
        fast_color: "Cor rÃ¡pida",
        max_notes: "MÃ¡ximo de notas",
        period_in_seconds: "PerÃ­odo em segundos",
        start: "InÃ­cio",
        end: "Fim",
        color_for_in_scale: "Cor para na escala",
        color_for_not_in_scale: "Cor para fora da escala",
        scale_key: "Tecla da escala",


        //ledcolor
        led_color: "Cor do LED",
        multicolor: "Multicolorido",
        rainbow_colors: "Cores do arco-Ã­ris",
        speed: "Velocidade",
        gradient: "Gradiente",
        scale_coloring: "ColoraÃ§Ã£o em Escala",
        velocity_rainbow: "Arco-Ã­ris de Velocidade",

        //lightmode
        fading: "Desvanecimento",
        velocity: "Velocidade",
        instant: "Imediato",
        very_fast: "Muito rÃ¡pido",
        fast: "RÃ¡pido",
        medium: "MÃ©dio",
        slow: "Lento",
        very_slow: "Muito Lento",

        //ledsettings
        backlight: "Luz de fundo",
        sides_colors:  "Cores laterais",
        off: "Desligado",
        same_as_led_color: "Mesma cor da LED",
        rgb: "RGB",
        adjustments: "Ajustes",
        skipped_notes: "Notas ignoradas",
        finger_based_ignore: "Com base nos dedos: ignore notas com informaÃ§Ãµes sobre qual mÃ£o tocar",
        normal_ignore_all_other: "Normal: ignore todas as outras notas",
        none: "Nenhum",
        finger_based: "Com base nos dedos",
        reverse: "Reverter",
        inverted: "Invertido",
        shift: "Deslocar",
        led_count: "Contagem de LEDs",
        leds_per_meter: "LEDs por metro",
        led_note_offsets: "Desvio de Nota de LED",
        shift_notes_for_better_alignment: "Ajustar as posiÃ§Ãµes dos LEDs para melhor alinhamento",
        light_number_means: "NÃºmero da Nota: 72, Offset: 2: Para notas acima de 72, os LEDs sÃ£o deslocados 2 posiÃ§Ãµes para trÃ¡s (em direÃ§Ã£o a notas mais baixas)",
        light_number: "NÃºmero da Nota",
        note_offset: "Desvio da nota",
        disable_backlight_on_idle: "Desativar iluminaÃ§Ã£o de fundo em repouso",

        //songs
        status: "Status",
        start_recording: "Iniciar gravaÃ§Ã£o",
        stop_recording: "Parar gravaÃ§Ã£o",
        starting: "Iniciando",
        stop_and_save: "Parar e salvar",
        cancel_recording: "Cancelar gravaÃ§Ã£o",
        canceling: "Cancelando",
        upload_songs: "Enviar canÃ§Ãµes",
        drag_and_drop_midi: "Arraste e solte o arquivo(s) MIDI aqui",
        or_click_to_choose: "ou clique para escolher o(s) arquivo(s) para enviar",
        play_on_piano: "Tocar no piano",
        stop: "Parar",
        learning_status: "ComeÃ§ar a aprender",
        stop_learning: "Parar aprendizado",
        loop: "Loop",
        practice: "PrÃ¡tica",
        melody:  "Melodia",
        rhythm: "Ritmo",
        listen: "Ouvir",
        tempo:  "Tempo",
        hands: "MÃ£os",
        both: "Ambas",
        right: "Direita",
        left: "Esquerda",
        mute_hands: "Silenciar mÃ£os",
        wrong_notes: "Notas erradas",
        disabled: "Desativado",
        enabled: "Ativado",
        future_notes: "Notas futuras",
        start_point: "Ponto inicial",
        set_the_current_track_time: "Defina o tempo de faixa atual como o inÃ­cio do loop",
        end_point: "Ponto final",
        set_the_current_track_time_as_the_loop_end: "Defina o tempo de faixa atual como o fim do loop",
        left_hand_color: "Cor da mÃ£o esquerda",
        right_hand_color: "Cor da mÃ£o direita",
        songs_list: "Lista de canÃ§Ãµes",
        getting_songs_list: "Obtendo lista de canÃ§Ãµes",
        number_of_mistakes: "NÃºmero de erros para reiniciar o ciclo (0 - nunca)",

        //sheetmusic
        load_custom_sheet: "Carregar folha personalizada",
        offset_ms: "CompensaÃ§Ã£o (ms)",
        sheet_tip_line_1: "Se a conversÃ£o automÃ¡tica nÃ£o atender Ã s suas expectativas, vocÃª pode carregar sua prÃ³pria notaÃ§Ã£o musical.",
        sheet_tip_line_2: "A parte destacada da notaÃ§Ã£o musical Ã© apenas um indicador aproximado. Utilize a ferramenta de compensaÃ§Ã£o para aperfeiÃ§oar a sincronizaÃ§Ã£o.",
        sheet_tip_line_3: "Para obter o melhor resultado, faÃ§a o seguinte:",
        sheet_tip_line_4: "1. Converta sua partitura em um arquivo MIDI usando Musescore ou um programa semelhante, e nomeie-o da mesma forma que o arquivo MIDI que deseja carregar. (Por exemplo, minha_mÃºsica.mid e minha_mÃºsica.xml)",
        sheet_tip_line_5: "2. FaÃ§a o envio do arquivo MIDI e do arquivo de notaÃ§Ã£o musical.",

        //songslist
        name: "Nome",
        date: "Data",
        action: "AÃ§Ã£o",
        songs_per_page: "CanÃ§Ãµes por pÃ¡gina",
        total_songs: "Total de canÃ§Ãµes: ",

        //sequences
        sequence: "SequÃªncia",
        active_sequence: "SequÃªncia Ativa",
        color: "Cor",
        next_step: "PrÃ³ximo passo",
        press_spacebar:  "Pressione a barra de espaÃ§o",
        add: "Adicionar",
        remove: "Remover",
        step: "Etapa",
        activation_method:  "MÃ©todo de AtivaÃ§Ã£o",
        button_press: "Pressionar botÃ£o",
        sustain_pedal: "Pedal Sustain",
        portamento_pedal:  "Pedal Portamento",
        sostuneto_pedal: "Pedal Sostuneto",
        soft_pedal: "Pedal Soft",
        next_step_value:  "Valor do prÃ³ximo passo",
        next_step_tip_line_1: "Este valor decide se o prÃ³ximo passo Ã© ativado ao pressionar ou soltar o pedal.",
        next_step_tip_line_2: "Por exemplo, se vocÃª quiser alterar as configuraÃ§Ãµes depois de pressionar totalmente o pedal Sostenuto, vocÃª deve definir para 126",
        next_step_tip_line_3: "(127 Ã© o valor mÃ¡ximo quando o pedal estÃ¡ totalmente pressionado).",
        next_step_tip_line_4: "Defina o valor para -1 para alterar as configuraÃ§Ãµes com o pedal, soltando-o completamente.",
        sequence_name: "Nome da sequÃªncia",
        save_current_settings_to_step: "Salvar configuraÃ§Ãµes atuais para a etapa",

        //ports
        for_lighting_leds: "Para iluminar os LEDs com o seu teclado, defina a porta do seu piano como entrada ativa.",
        set_your_synthesia: "Defina a porta do Synthesia para o modo de aprendizado.",
        active: "Ativo",
        switch: "Alterar",
        secondary: "SecundÃ¡rio",
        used_for_sound: "Usado para som ao reproduzir um arquivo MIDI.",
        list_of_ports: "Lista de portas e conexÃµes",
        disconnect_ports: "Desconectar portas",
        restart_rtp: "Reiniciar serviÃ§o RTP MIDI",
        midi_events: "Eventos MIDI",
        show_midi_events: "Exibir eventos MIDI (pode reduzir o desempenho)",

        //network
        connected_wifi: "Wi-Fi Conectado",
        disconnect_wifi_and_create_hotspot: "Desconectar do Wi-Fi e criar Hotspot",
        disconnecting_warning_line_1: "A desconexÃ£o do Wi-Fi vai iniciar o processo para criar um Hotspot. Isso pode demorar um pouco.",
        disconnecting_warning_line_2: "VocÃª precisarÃ¡ se conectar ao novo Hotspot criado para acessar a interface web novamente.",
        wifi_list: "Lista de Wi-Fi",
        local_address: "EndereÃ§o Local",
        change_address: "Alterar EndereÃ§o",
        enter_local_address: "Digite novo endereÃ§o local",
        hotspot_password_section_title: "Senha do Hotspot",
        enter_hotspot_password: "Digite a nova senha do hotspot (mÃ­n. 8 caracteres)",
        change_hotspot_password_button: "Alterar Senha do Hotspot",
        show_password: "Mostrar Senha",
        hide_password: "Ocultar Senha",
        password_too_short: "A senha deve ter pelo menos 8 caracteres.",
        changing_hotspot_password_message: "Alterando a senha do hotspot... Aguarde, por favor.",
        hotspot_password_changed_success: "Senha do hotspot alterada com sucesso! O hotspot serÃ¡ reiniciado.",
        hotspot_password_changed_fail: "Falha ao alterar a senha do hotspot.",
        hotspot_password_changed_fail_error: "Erro ao alterar a senha do hotspot. Tente novamente.",
        hotspot_password_change_note: "Nota: Alterar a senha do hotspot habilitarÃ¡ o hotspot se ele ainda nÃ£o estiver ativo e reiniciarÃ¡ o hotspot, desconectando os usuÃ¡rios atuais.",
        password_strength_weak: "Fraca",
        password_strength_medium: "MÃ©dia",
        password_strength_strong: "Forte",
        password_strength_very_strong: "Muito Forte",
        password_too_short_strength: "Muito curta",

        //ledanimations
        stop_animation: "Parar animaÃ§Ã£o",
        led_animation_on_idle: "AnimaÃ§Ã£o de LED em ociosidade",
        after_minutes: "depois de minutos (0 - nunca)",
        animation_type: "Tipo de animaÃ§Ã£o",

        //homepage
        advanced_mode: "Modo avanÃ§ado",
        system_cpu_usage: "Uso de CPU do sistema",
        ram_usage: "Uso de RAM",
        disk_usage: "Uso de disco",
        bandwidth_usage: "Uso de largura de banda",
        process_cpu_usage: "Uso de CPU do processo",
        metronome: "MetrÃ´nomo",
        beats_per_measure: "Batidas por compasso",
        volume: "Volume",
        color_mode: "Modo de cor",
        single: "Ãnico",
        light_mode: "Modo de luminosidade",
        normal: "Normal",
        brightness: "Brilho",
        backlight_brightness: "Luminosidade de fundo",
        input_port: "Porta de entrada",
        playback_port: "Porta de reproduÃ§Ã£o",
        cover_state: "Estado da tampa",
        screen: "Tela",
        reset_settings_to_default: "Redefinir configuraÃ§Ãµes para padrÃ£o",
        confirm: "Confirmar",
        restart_rpi: "Reiniciar RPi",
        restart_visualizer: "Reiniciar Visualizador",
        power_off: "Desligar",
        update_visualizer: "Atualizar Visualizador",
        connect_ports: "Conectar Portas",
        clean_led_strip: "Limpar tira de LED",
        logs: "Logs",
        show_last: "Mostrar Ãºltimo",
        lines: "linhas",
        reinitialize_network_on_boot: "Reinicializar a rede na inicializaÃ§Ã£o",
        required_for_some_routers: "NecessÃ¡rio para alguns roteadores. Desativar esta opÃ§Ã£o acelerarÃ¡ o inÃ­cio, mas pode causar problemas de conexÃ£o",

        //dynamic content
        incorrect_password: "Se uma senha incorreta for inserida, pode levar alguns minutos para que o hotspot seja restabelecido.",
        if_the_hotspot: "Se o Hotspot nÃ£o aparecer apÃ³s 5 minutos, reinicie o dispositivo",
        connect: "Conectar",


        session_summary: "Resumo do Jogo",
        right_hand_mistakes: "Erros da MÃ£o Direita",
        right_hand_delay: "Tempo De ReaÃ§Ã£o Longo - MÃ£o Direita",
        left_hand_mistakes: "Erros da MÃ£o Esquerda",
        left_hand_delay: "Tempo De ReaÃ§Ã£o Longo - MÃ£o Esquerda",
        right_hand_notes: "Notas da MÃ£o Direita",
        left_hand_notes: "Notas da MÃ£o Esquerda",
        right_hand_mistakes: "Erros da MÃ£o Direita",
        left_hand_mistakes: "Erros da MÃ£o Esquerda",
        note_timing_vs_delay: "SincronizaÃ§Ã£o de Notas vs Atraso",
        chart_tooltip_label_delay: "Atraso",
        chart_tooltip_label_at_time: "Em",
        mistakes: "Erro de Tempo",
        max_acceptaple_delay: "Atraso MÃ¡ximo Permitido",
        time: "Tempo MIDI (segundos)",
        delay: "Atraso (segundos)",
        reset_zoom: "Reiniciar",
        learning_status: "Iniciar Aprendizado",

        // score and profiles
        score: "PontuaÃ§Ã£o",
        combo: "SequÃªncia",
        multiplier: "Multiplicador",

        profile_label: "Perfil",
        create_profile: "Criar perfil",
        show_score: "Mostrar pontuaÃ§Ã£o",
        show_summary: "Mostrar resumo",
        highscore: "PontuaÃ§Ã£o mais alta",
        new_profile: "novo perfil", 

        
    },

    ja: {
        //index
        loading: "èª­ã¿è¾¼ã¿ä¸­...",
        home: "ãã¼ã ",
        led_settings: "LEDè¨­å®",
        songs: "æ²",
        sequences: "ã·ã¼ã±ã³ã¹",
        ports_settings: "ãã¼ãè¨­å®",
        led_animations: "LEDã¢ãã¡ã¼ã·ã§ã³",
        wifi: "Wi-Fi",
        switch_ports: "ãã¼ãåæ¿",
        view_on_github: "GitHubã§è¦ã",
        join_discord: "Discordãµã¼ãã¼ã«åå ",

        offset: "ãªãã»ãã",
        scale: "ã¹ã±ã¼ã«",
        timeshift: "ã¿ã¤ã ã·ãã",
        scale_percent: "ã¹ã±ã¼ã«%",
        curve_percent: "ã«ã¼ã%",
        slow_color: "ã¹ã­ã¼ã«ã©ã¼",
        fast_color: "ãã¡ã¹ãã«ã©ã¼",
        max_notes: "æå¤§ã®é³æ°",
        period_in_seconds: "ç§åä½ã®æé",
        start: "ã¹ã¿ã¼ã",
        end: "çµäº",
        color_for_in_scale: "ã¹ã±ã¼ã«åã®è²",
        color_for_not_in_scale: "ã¹ã±ã¼ã«å¤ã®è²",
        scale_key: "ã¹ã±ã¼ã«ã­ã¼",

        //ledcolor
        led_color: "LEDã®è²",
        multicolor: "ãã«ãã«ã©ã¼",
        rainbow_colors: "ã¬ã¤ã³ãã¼ã«ã©ã¼",
        speed: "éåº¦",
        gradient: "ã°ã©ãã¼ã·ã§ã³",
        scale_coloring: "ã¹ã±ã¼ã«ã«ã©ã¼",
        velocity_rainbow: "ãã­ã·ãã£ã¬ã¤ã³ãã¼",

        //lightmode
        fading: "ãã§ã¼ã¸ã³ã°",
        velocity: "ãã­ã·ãã£",
        instant: "ã¤ã³ã¹ã¿ã³ã",
        very_fast: "éå¸¸ã«éã",
        fast: "éã",
        medium: "ä¸­ããã",
        slow: "éã",
        very_slow: "éå¸¸ã«éã",

        //ledsettings
        backlight: "ããã¯ã©ã¤ã",
        sides_colors:  "ãµã¤ãã«ã©ã¼",
        off: "ãªã",
        same_as_led_color: "LEDã®è²ã¨åã",
        rgb: "RGB",
        adjustments: "èª¿æ´",
        skipped_notes: "ã¹ã­ããããããã¼ã",
        finger_based_ignore: "ãã£ã³ã¬ã¼ãã¼ã¹ï¼ã©ã®æã§å¼¾ãã¹ããã®æå ±ããããã¼ããç¡è¦",
        normal_ignore_all_other: "ãã¼ãã«ï¼ãã¹ã¦ã®ä»ã®ãã¼ããç¡è¦",
        none: "ãªã",
        finger_based: "ãã£ã³ã¬ã¼ãã¼ã¹",
        reverse: "ãªãã¼ã¹",
        inverted: "åè»¢",
        shift: "ã·ãã",
        led_count: "LEDã®æ°",
        leds_per_meter: "ã¡ã¼ãã«ãããLEDæ°",
        led_note_offsets: "LEDãã¼ããªãã»ãã",
        shift_notes_for_better_alignment: "ããè¯ãæ´åã®ããã«LEDã®ä½ç½®ãèª¿æ´ãã",
        light_number_means: "ãã¼ãçªå·: 72, ãªãã»ãã: 2: 72ä»¥ä¸ã®é³ç¬¦ã®å ´åãLEDã2ã¤åå¾ãã«ã·ãããã¾ãï¼ä½ãé³ç¬¦å´ã¸ï¼",
        light_number: "ãã¼ãçªå·",
        note_offset: "ãã¼ããªãã»ãã",
        disable_backlight_on_idle: "ã¢ã¤ãã«ç¶æã§ããã¯ã©ã¤ããç¡å¹ã«ãã",

        //songs
        status: "ã¹ãã¼ã¿ã¹",
        start_recording: "é²é³éå§",
        starting: "éå§",
        stop_and_save: "åæ­¢ãã¦ä¿å­",
        cancel_recording: "é²é³ãã­ã£ã³ã»ã«",
        canceling:  "ã­ã£ã³ã»ã«ä¸­",
        upload_songs: "æ²ãã¢ããã­ã¼ã",
        drag_and_drop_midi: "ããã«MIDIãã¡ã¤ã«ããã©ãã°ã¢ã³ããã­ãã",
        or_click_to_choose: "ã¾ãã¯ãã¢ããã­ã¼ããããã¡ã¤ã«ãé¸æããããã«ã¯ãªãã¯ãã¾ã",
        play_on_piano: "ãã¢ãã§æ¼å¥ãã",
        stop: "åæ­¢",
        learning_status: "å­¦ç¿ãå§ãã",
        stop_learning: "å­¦ç¿ãåæ­¢",
        loop: "ã«ã¼ã",
        practice: "ç·´ç¿",
        melody: "ã¡ã­ãã£",
        rhythm: "ãªãºã ",
        listen:  "è´ã",
        tempo:  "ãã³ã",
        hands: "æ",
        both: "ä¸¡æ¹",
        right: "å³",
        left: "å·¦",
        mute_hands: "ãã¥ã¼ãæ",
        wrong_notes: "ééã£ããã¼ã",
        disabled: "ç¡å¹",
        enabled: "æå¹",
        future_notes: "æªæ¥ã®ãã¼ã",
        start_point: "ã¹ã¿ã¼ããã¤ã³ã",
        set_the_current_track_time: "ç¾å¨ã®ãã©ãã¯æéãã«ã¼ãã®éå§ã¨ãã¦è¨­å®ãã¾ã",
        end_point: "ã¨ã³ããã¤ã³ã",
        set_the_current_track_time_as_the_loop_end: "ç¾å¨ã®ãã©ãã¯æéãã«ã¼ãã®çµäºã¨ãã¦è¨­å®ãã¾ã",
        left_hand_color: "å·¦æã®è²",
        right_hand_color: "å³æã®è²",
        songs_list: "æ²ãªã¹ã",
        getting_songs_list: "æ²ã®ãªã¹ããåå¾ãã",
        number_of_mistakes: "ã«ã¼ããåèµ·åããããã®èª¤å·®ã®æ°ï¼0 - çµ¶å¯¾ã«ããªãï¼",

        //sheetmusic
        load_custom_sheet: "ã«ã¹ã¿ã ã·ã¼ããèª­ã¿è¾¼ã",
        offset_ms: "ãªãã»ããï¼msï¼",
        sheet_tip_line_1: "èªåå¤æãæå¾ãããã®ã§ã¯ãªãå ´åãç¬èªã®æ¥½è­ãèª­ã¿è¾¼ããã¨ãã§ãã¾ãã",
        sheet_tip_line_2: "æ¥½è­ã®ãã¤ã©ã¤ãé¨åã¯ãç®å®ã§ãããªãã»ãããã¼ã«ãä½¿ç¨ãã¦åæãåä¸ããã¾ãã",
        sheet_tip_line_3: "æè¯ã®çµæãå¾ãããã«ä»¥ä¸ã®æé ãå®è¡ãã¾ãï¼",
        sheet_tip_line_4: "1. Musescoreã¾ãã¯åæ§ã®ãã­ã°ã©ã ãä½¿ç¨ãã¦æ¥½è­ãMIDIãã¡ã¤ã«ã«å¤æããèª­ã¿è¾¼ã¿ããMIDIãã¡ã¤ã«ã¨åãååãä»ãã¾ãï¼ä¾ï¼my_music.midããã³my_music.xmlï¼ã",
        sheet_tip_line_5: "2. MIDIãã¡ã¤ã«ã¨æ¥½è­ãã¡ã¤ã«ãã¢ããã­ã¼ããã¾ãã",

        //songslist
        name: "æ²å",
        date: "æ¥ä»",
        action: "ã¢ã¯ã·ã§ã³",
        songs_per_page: "æ²/ãã¼ã¸",
        total_songs: "åè¨æ²æ°ï¼",

        //sequences
        sequence: "ã·ã¼ã±ã³ã¹",
        active_sequence: "ã¢ã¯ãã£ãã·ã¼ã±ã³ã¹",
        color: "è²",
        next_step: "æ¬¡ã®ã¹ããã",
        press_spacebar:  "ã¹ãã¼ã¹ãã¼ãæ¼ã",
        add: "è¿½å ",
        remove: "åé¤",
        step: "ã¹ããã",
        activation_method:  "ã¢ã¯ãã£ãã¼ã·ã§ã³æ¹æ³",
        button_press: "ãã¿ã³ãã¬ã¹",
        sustain_pedal: "ãµã¹ãã¤ã³ããã«",
        portamento_pedal:  "ãã«ã¿ã¡ã³ãããã«",
        sostuneto_pedal: "ã½ã¹ããã¼ãããã«",
        soft_pedal: "ã½ããããã«",
        next_step_value:  "æ¬¡ã®ã¹ãããå¤",
        next_step_tip_line_1: "ãã®å¤ã¯æ¬¡ã®ã¹ããããããã«ãæ¼ããé¢ãã¨ãã«ã¢ã¯ãã£ãã«ãªããã©ãããæ±ºå®ãã¾ãã",
        next_step_tip_line_2: "ä¾ãã°ãã½ã¹ããã¼ãããã«ãå®å¨ã«æ¼ãã¦è¨­å®ãå¤æ´ãããå ´åã¯ãããã126ã«è¨­å®ãã¾ã",
        next_step_tip_line_3: "ï¼127ã¯ããã«ãå®å¨ã«æ¼ãããå ´åã®æå¤§å¤ã§ãï¼ã",
        next_step_tip_line_4: "ããã«ãå®å¨ã«é¢ãã¦è¨­å®ãå¤æ´ããã«ã¯ãå¤ã-1ã«è¨­å®ãã¾ãã",
        sequence_name: "ã·ã¼ã±ã³ã¹å",
        save_current_settings_to_step: "ç¾å¨ã®è¨­å®ãã¹ãããã«ä¿å­",

        //ports
        for_lighting_leds: "ã­ã¼ãã¼ãã§LEDãã©ã¤ãã¢ããããã«ã¯ããã¢ããã¼ããã¢ã¯ãã£ããªå¥åã¨ãã¦è¨­å®ãã¾ãã",
        set_your_synthesia: "å­¦ç¿ã¢ã¼ãã®ããã«Synthesiaã®ãã¼ããè¨­å®ãã¾ãã",
        active: "ã¢ã¯ãã£ã",
        switch: "ã¹ã¤ãã",
        secondary: "ã»ã«ã³ããª",
        used_for_sound: "MIDIãã¡ã¤ã«ãåçããã¨ãã«ä½¿ç¨ãããã",
        list_of_ports: "ãã¼ãã¨æ¥ç¶ã®ãªã¹ã",
        disconnect_ports: "ãã¼ãåæ­",
        restart_rtp: "RTP MIDIãµã¼ãã¹ãåèµ·å",
        midi_events: "MIDIã¤ãã³ã",
        show_midi_events: "MIDIã¤ãã³ããè¡¨ç¤ºï¼ããã©ã¼ãã³ã¹ãä½ä¸ããå¯è½æ§ãããã¾ãï¼",

        //network
        connected_wifi: "æ¥ç¶æ¸ã¿Wi-Fi",
        disconnect_wifi_and_create_hotspot: "Wi-Fiãåæ­ãããããã¹ããããä½æ",
        disconnecting_warning_line_1: "Wi-Fiã®æ¥ç¶ãåãã¨ããããã¹ãããã®ä½æãã­ã»ã¹ãéå§ããã¾ããããã«ã¯å°ãæéããããå ´åãããã¾ãã",
        disconnecting_warning_line_2: "ã¦ã§ãã¤ã³ã¿ã¼ãã§ã¼ã¹ã«ååº¦ã¢ã¯ã»ã¹ããã«ã¯ãæ°ããä½æããããããã¹ãããã«æ¥ç¶ããå¿è¦ãããã¾ãã",
        wifi_list: "Wi-Fiã®ãªã¹ã",
        local_address: "ç¾å°ä½æ",
        change_address: "ä½æãå¤æ´",
        enter_local_address: "æ°ããç¾å°ä½æãå¥å",
        hotspot_password_section_title: "ãããã¹ãããã®ãã¹ã¯ã¼ã",
        enter_hotspot_password: "æ°ãããããã¹ãããã®ãã¹ã¯ã¼ããå¥åï¼8æå­ä»¥ä¸ï¼",
        change_hotspot_password_button: "ãããã¹ãããã®ãã¹ã¯ã¼ããå¤æ´",
        show_password: "ãã¹ã¯ã¼ããè¡¨ç¤º",
        hide_password: "ãã¹ã¯ã¼ããéè¡¨ç¤º",
        password_too_short: "ãã¹ã¯ã¼ãã¯8æå­ä»¥ä¸ã§ããå¿è¦ãããã¾ãã",
        changing_hotspot_password_message: "ãããã¹ãããã®ãã¹ã¯ã¼ããå¤æ´ãã¦ãã¾ã...ãå¾ã¡ãã ããã",
        hotspot_password_changed_success: "ãããã¹ãããã®ãã¹ã¯ã¼ããæ­£å¸¸ã«å¤æ´ããã¾ããï¼ãããã¹ããããåèµ·åãã¾ãã",
        hotspot_password_changed_fail: "ãããã¹ãããã®ãã¹ã¯ã¼ãã®å¤æ´ã«å¤±æãã¾ããã",
        hotspot_password_changed_fail_error: "ãããã¹ãããã®ãã¹ã¯ã¼ãå¤æ´ä¸­ã«ã¨ã©ã¼ãçºçãã¾ãããããä¸åº¦ãè©¦ããã ããã",
        hotspot_password_change_note: "æ³¨æï¼ãã¹ã¯ã¼ããå¤æ´ããã¨ããããã¹ããããã¾ã ã¢ã¯ãã£ãã§ãªãå ´åã«æå¹ã«ãªããåèµ·åãã¦ç¾å¨ã®ã¦ã¼ã¶ã¼ãåæ­ãã¾ãã",
        password_strength_weak: "å¼±ã",
        password_strength_medium: "æ®é",
        password_strength_strong: "å¼·ã",
        password_strength_very_strong: "éå¸¸ã«å¼·ã",
        password_too_short_strength: "ç­ããã¾ã",

        //ledanimations
        stop_animation: "ã¢ãã¡ã¼ã·ã§ã³åæ­¢",
        led_animation_on_idle: "IDLEç¶æã§ã®LEDã¢ãã¡ã¼ã·ã§ã³",
        after_minutes: "çµéå¾ï¼0ï¼ãªãï¼",
        animation_type: "ã¢ãã¡ã¼ã·ã§ã³ã®ç¨®é¡",

        //homepage
        advanced_mode: "ã¢ããã³ã¹ãã¢ã¼ã",
        system_cpu_usage: "ã·ã¹ãã CPUä½¿ç¨ç",
        ram_usage: "RAMä½¿ç¨é",
        disk_usage: "ãã£ã¹ã¯ä½¿ç¨é",
        bandwidth_usage: "å¸¯åå¹ã®ä½¿ç¨",
        process_cpu_usage: "ãã­ã»ã¹CPUä½¿ç¨ç",
        metronome: "ã¡ãã­ãã¼ã ",
        beats_per_measure: "1æå½ããã®æææ°",
        volume: "ããªã¥ã¼ã ",
        color_mode: "ã«ã©ã¼ã¢ã¼ã",
        single: "ã·ã³ã°ã«",
        light_mode: "ã©ã¤ãã¢ã¼ã",
        normal: "ãã¼ãã«",
        brightness: "è¼åº¦",
        backlight_brightness: "ããã¯ã©ã¤ãã®è¼åº¦",
        input_port: "å¥åãã¼ã",
        playback_port: "åçãã¼ã",
        cover_state: "ã«ãã¼ã¹ãã¼ã",
        screen: "ã¹ã¯ãªã¼ã³",
        reset_settings_to_default: "è¨­å®ãããã©ã«ãã«ãªã»ãã",
        confirm: "ç¢ºèª",
        restart_rpi: "RPiã®åèµ·å",
        restart_visualizer: "ãã¸ã¥ã¢ã©ã¤ã¶ã¼ã®åèµ·å",
        power_off: "é»æºãªã",
        update_visualizer: "ãã¸ã¥ã¢ã©ã¤ã¶ã¼ã®æ´æ°",
        connect_ports: "ãã¼ãã®æ¥ç¶",
        clean_led_strip: "LEDã¹ããªãããã¯ãªã¼ã³",
        logs: "ã­ã°",
        show_last: "æå¾ãè¡¨ç¤º",
        lines: "è¡æ°",
        reinitialize_network_on_boot: "Reinicializar a rede na inicializaÃ§Ã£o",
        required_for_some_routers: "ä¸é¨ã®ã«ã¼ã¿ã¼ã«å¿è¦ã§ãããã®ãªãã·ã§ã³ãç¡å¹ã«ããã¨èµ·åãéããªãã¾ãããæ¥ç¶ã®åé¡ãå¼ãèµ·ããå¯è½æ§ãããã¾ã",

        //dynamic content
        incorrect_password: "ãã¹ã¯ã¼ããééã£ã¦ããå ´åããããã¹ããããåè¨­å®ãããã¾ã§ã«æ°åããããã¨ãããã¾ãã",
        if_the_hotspot: "ãããã¹ãããã5åå¾ã«è¡¨ç¤ºãããªãå ´åã¯ãããã¤ã¹ãåèµ·åãã¦ãã ãã",
        connect: "æ¥ç¶",

        session_summary: "ã²ã¼ã ã®æ¦è¦",
        right_hand_mistakes: "å³æã®ãã¹",
        right_hand_delay: "åå¿æéãé·ã - å³æ",
        left_hand_mistakes: "å·¦æã®ãã¹",
        left_hand_delay: "åå¿æéãé·ã - å·¦æ",
        right_hand_notes: "å³æã®ãã¼ã",
        left_hand_notes: "å·¦æã®ãã¼ã",
        right_hand_mistakes: "å³æã®ã¨ã©ã¼",
        left_hand_mistakes: "å·¦æã®ã¨ã©ã¼",
        note_timing_vs_delay: "ãã¼ãã®ã¿ã¤ãã³ã°ã¨éå»¶",
        chart_tooltip_label_delay: "éå»¶",
        chart_tooltip_label_at_time: "æç¹ã§",
        mistakes: "ã¿ã¤ãã³ã°ãã¹",
        max_acceptaple_delay: "æå¤§è¨±å®¹éå»¶",
        time: "MIDIæéï¼ç§ï¼",
        delay: "éå»¶ï¼ç§ï¼",
        reset_zoom: "ãªã»ãã",
        learning_status: "å­¦ç¿ãéå§",


        // score and profiles
        score: "ã¹ã³ã¢",
        combo: "ã³ã³ã",
        multiplier: "åç",

        profile_label: "ãã­ãã£ã¼ã«",
        create_profile: "ãã­ãã£ã¼ã«ãä½æ",
        show_score: "ã¹ã³ã¢ãè¡¨ç¤º",
        show_summary: "æ¦è¦ãè¡¨ç¤º",
        highscore: "ãã¤ã¹ã³ã¢",
        new_profile: "æ°ãããã­ãã£ã¼ã«",
        
    },

    ko: {
    //index
    loading: "ë¡ë© ì¤...",
    home: "í",
    led_settings: "LED ì¤ì ",
    songs: "ê³¡",
    sequences: "ìíì¤",
    ports_settings: "í¬í¸ ì¤ì ",
    led_animations: "LED ì ëë©ì´ì",
    wifi: "ìì´íì´",
    switch_ports: "í¬í¸ ì í",
    view_on_github: "GitHubìì ë³´ê¸°",
    join_discord: "Discord ìë² ì°¸ì¬",

    //ledcolor
    led_color: "LED ìì",
    multicolor: "ë©í°ì»¬ë¬",
    rainbow_colors: "ë¬´ì§ê° ìì",
    speed: "ìë",
    gradient: "ê·¸ë¼ë°ì´ì",
    scale_coloring: "ì¤ì¼ì¼ ì»¬ë¬ë§",
    velocity_rainbow: "ìë ë¬´ì§ê°",

    offset: "ì¤íì",
    scale: "ì¤ì¼ì¼",
    timeshift: "íììíí¸",
    scale_percent: "ì¤ì¼ì¼ %",
    curve_percent: "ê³¡ì  %",
    slow_color: "ëë¦° ìì",
    fast_color: "ë¹ ë¥¸ ìì",
    max_notes: "ìµë ìí ì",
    period_in_seconds: "ì£¼ê¸°(ì´)",
    start: "ìì",
    end: "ì¢ë£",
    color_for_in_scale: "ì¤ì¼ì¼ ë´ ìì",
    color_for_not_in_scale: "ì¤ì¼ì¼ ì¸ ìì",
    scale_key: "ì¤ì¼ì¼ í¤",

    //lightmode
    fading: "íì´ë©",
    velocity: "ë²¨ë¡ìí°",
    instant: "ì¦ì",
    very_fast: "ë§¤ì° ë¹ ë¦",
    fast: "ë¹ ë¦",
    medium: "ì¤ê°",
    slow: "ëë¦¼",
    very_slow: "ë§¤ì° ëë¦¼",

    //ledsettings
    backlight: "ë°±ë¼ì´í¸",
    sides_colors: "ì¸¡ë©´ ìì",
    off: "ëê¸°",
    same_as_led_color: "LED ììê³¼ ëì¼",
    rgb: "RGB",
    adjustments: "ì¡°ì ",
    skipped_notes: "ê±´ëë´ ìí",
    finger_based_ignore: "ìê°ë½ ê¸°ë°: ì°ì£¼í  ìì ëí ì ë³´ê° ìë ìí ë¬´ì",
    normal_ignore_all_other: "ì¼ë°: ë¤ë¥¸ ëª¨ë  ìí ë¬´ì",
    none: "ìì",
    finger_based: "ìê°ë½ ê¸°ë°",
    reverse: "ì­ë°©í¥",
    inverted: "ë°ì ",
    shift: "ì´ë",
    led_count: "LED ê°ì",
    leds_per_meter: "ë¯¸í°ë¹ LED ì",
    led_note_offsets: "LED ìí ì¤íì",
    shift_notes_for_better_alignment: "ë ëì ì ë ¬ì ìí´ LED ìì¹ë¥¼ ì¡°ì í©ëë¤",
    light_number_means: "ë¸í¸ ë²í¸: 72, ì¤íì: 2: 72ë² ì´ìì ë¸í¸ì ëí´, LEDê° 2ì¹¸ ë¤ë¡ ì´ëí©ëë¤ (ë ë®ì ë¸í¸ ë°©í¥ì¼ë¡)",
    light_number: "ë¸í¸ ë²í¸",
    note_offset: "ìí ì¤íì",
    disable_backlight_on_idle: "ëê¸° ì ë°±ë¼ì´í¸ ë¹íì±í",

    //songs
    status: "ìí",
    start_recording: "ë¹ì ìì",
    starting: "ìì ì¤",
    stop_and_save: "ì¤ì§ ë° ì ì¥",
    cancel_recording: "ë¹ì ì·¨ì",
    canceling: "ì·¨ì ì¤",
    upload_songs: "ê³¡ ìë¡ë",
    drag_and_drop_midi: "MIDI íì¼ì ì¬ê¸°ì ëëê·¸ ì¤ ëë¡­íì¸ì",
    or_click_to_choose: "ëë í´ë¦­íì¬ íì¼ ì í",
    play_on_piano: "í¼ìë¸ë¡ ì¬ì",
    stop: "ì¤ì§",
    learning_status: "íìµ ììíê¸°",
    stop_learning: "íìµ ì¤ì§",
    loop: "ë°ë³µ",
    practice: "ì°ìµ",
    melody: "ë©ë¡ë",
    rhythm: "ë¦¬ë¬",
    listen: "ë£ê¸°",
    tempo: "íí¬",
    hands: "ì",
    both: "ìì",
    right: "ì¤ë¥¸ì",
    left: "ì¼ì",
    mute_hands: "ì ììê±°",
    wrong_notes: "ìëª»ë ìí",
    disabled: "ë¹íì±í",
    enabled: "íì±í",
    future_notes: "ë¤ì ìí",
    start_point: "ììì ",
    set_the_current_track_time: "íì¬ í¸ë ìê°ì ë°ë³µ ììì¼ë¡ ì¤ì ",
    end_point: "ì¢ë£ì ",
    set_the_current_track_time_as_the_loop_end: "íì¬ í¸ë ìê°ì ë°ë³µ ì¢ë£ë¡ ì¤ì ",
    left_hand_color: "ì¼ì ìì",
    right_hand_color: "ì¤ë¥¸ì ìì",
    songs_list: "ê³¡ ëª©ë¡",
    getting_songs_list: "ê³¡ ëª©ë¡ ê°ì ¸ì¤ê¸°",
    number_of_mistakes: "ë°ë³µ ì¬ììì ìí ì¤ì íì (0 - ë¬´ì í)",

    //sheetmusic
    load_custom_sheet: "ì¬ì©ì ì ì ìë³´ ë¡ë",
    offset_ms: "ì¤íì (ms)",
    sheet_tip_line_1: "ìë ë³íì´ ê¸°ëì ë¯¸ì¹ì§ ëª»íë ê²½ì° ìì ë§ì ìë³´ë¥¼ ë¡ëí  ì ììµëë¤.",
    sheet_tip_line_2: "ê°ì¡° íìë ìë³´ ë¶ë¶ì ëëµì ì¸ íìì¼ ë¿ìëë¤. ëê¸°íë¥¼ ê°ì íë ¤ë©´ ì¤íì ëêµ¬ë¥¼ ì¬ì©íì¸ì.",
    sheet_tip_line_3: "ìµìì ê²°ê³¼ë¥¼ ìí´ ë¤ìì ìííì¸ì:",
    sheet_tip_line_4: "1. Musescoreë ì ì¬í íë¡ê·¸ë¨ì ì¬ì©íì¬ ìë³´ë¥¼ MIDI íì¼ë¡ ë³ííê³ , ë¡ëíë ¤ë MIDI íì¼ê³¼ ëì¼í ì´ë¦ì¼ë¡ ì§ì íì¸ì.",
    sheet_tip_line_5: "2. MIDI íì¼ê³¼ ìë³´ íì¼ì ìë¡ëíì¸ì.",

    //songslist
    name: "ì´ë¦",
    date: "ë ì§",
    action: "ìì",
    songs_per_page: "íì´ì§ë¹ ê³¡ ì",
    total_songs: "ì ì²´ ê³¡ ì: ",

    //sequences
    sequence: "ìíì¤",
    active_sequence: "íì± ìíì¤",
    color: "ìì",
    next_step: "ë¤ì ë¨ê³",
    press_spacebar: "ì¤íì´ì¤ë° ëë¥´ê¸°",
    add: "ì¶ê°",
    remove: "ì ê±°",
    step: "ë¨ê³",
    activation_method: "íì±í ë°©ë²",
    button_press: "ë²í¼ ëë¦",
    sustain_pedal: "ìì¤íì¸ íë¬",
    portamento_pedal: "í¬ë¥´íë©í  íë¬",
    sostuneto_pedal: "ìì¤íëí  íë¬",
    soft_pedal: "ìíí¸ íë¬",
    next_step_value: "ë¤ì ë¨ê³ ê°",
    next_step_tip_line_1: "ì´ ê°ì íë¬ì ëë¥´ê±°ë ëì ë ë¤ì ë¨ê³ê° íì±íëëì§ ê²°ì í©ëë¤.",
    next_step_tip_line_2: "ìë¥¼ ë¤ì´ ìì¤íëí  íë¬ì ìì í ëë¥¼ ë ì¤ì ì ë³ê²½íë ¤ë©´ 126ì¼ë¡ ì¤ì íì¸ì",
    next_step_tip_line_3: "(127ì íë¬ì´ ìì í ëë¦° ìíì ìµëê°ìëë¤)",
    next_step_tip_line_4: "íë¬ì ìì í ëìì ì¤ì ì ë³ê²½íë ¤ë©´ ê°ì -1ë¡ ì¤ì íì¸ì.",
    sequence_name: "ìíì¤ ì´ë¦",
    save_current_settings_to_step: "íì¬ ì¤ì ì ë¨ê³ì ì ì¥",

    //ports
    for_lighting_leds: "í¤ë³´ëë¡ LEDë¥¼ ì¼ë ¤ë©´ í¼ìë¸ í¬í¸ë¥¼ íì± ìë ¥ì¼ë¡ ì¤ì íì¸ì.",
    set_your_synthesia: "íìµ ëª¨ëë¥¼ ìí´ ì ëìì í¬í¸ë¥¼ ì¤ì íì¸ì.",
    active: "íì±",
    switch: "ì í",
    secondary: "ë³´ì¡°",
    used_for_sound: "MIDI íì¼ ì¬ì ì ì¬ì©ë¨",
    list_of_ports: "í¬í¸ ë° ì°ê²° ëª©ë¡",
    disconnect_ports: "í¬í¸ ì°ê²° í´ì ",
    restart_rtp: "RTP MIDI ìë¹ì¤ ì¬ìì",
    midi_events: "MIDI ì´ë²¤í¸",
    show_midi_events: "MIDI ì´ë²¤í¸ íì (ì±ë¥ì´ ì íë  ì ìì)",

    //network
    connected_wifi: "ì°ê²°ë ìì´íì´",
    disconnect_wifi_and_create_hotspot: "ìì´íì´ ì°ê²° í´ì  ë° í«ì¤í ìì±",
    disconnecting_warning_line_1: "ìì´íì´ ì°ê²°ì í´ì íë©´ í«ì¤í ìì± íë¡ì¸ì¤ê° ììë©ëë¤. ìê°ì´ ê±¸ë¦´ ì ììµëë¤.",
    disconnecting_warning_line_2: "ì¹ ì¸í°íì´ì¤ì ë¤ì ì ìíë ¤ë©´ ìë¡ ìì±ë í«ì¤íì ì°ê²°í´ì¼ í©ëë¤.",
    wifi_list: "ìì´íì´ ëª©ë¡",
    local_address: "ë¡ì»¬ ì£¼ì",
    change_address: "ì£¼ì ë³ê²½",
    enter_local_address: "ì ë¡ì»¬ ì£¼ì ìë ¥",
    hotspot_password_section_title: "í«ì¤í ë¹ë°ë²í¸",
    enter_hotspot_password: "ì í«ì¤í ë¹ë°ë²í¸ ìë ¥ (ìµì 8ì)",
    change_hotspot_password_button: "í«ì¤í ë¹ë°ë²í¸ ë³ê²½",
    show_password: "ë¹ë°ë²í¸ íì",
    hide_password: "ë¹ë°ë²í¸ ì¨ê¸°ê¸°",
    password_too_short: "ë¹ë°ë²í¸ë 8ì ì´ìì´ì´ì¼ í©ëë¤.",
    changing_hotspot_password_message: "í«ì¤í ë¹ë°ë²í¸ë¥¼ ë³ê²½íë ì¤ìëë¤... ì ì ê¸°ë¤ë ¤ ì£¼ì­ìì¤.",
    hotspot_password_changed_success: "í«ì¤í ë¹ë°ë²í¸ê° ì±ê³µì ì¼ë¡ ë³ê²½ëììµëë¤! í«ì¤íì´ ë¤ì ììë©ëë¤.",
    hotspot_password_changed_fail: "í«ì¤í ë¹ë°ë²í¸ ë³ê²½ì ì¤í¨íìµëë¤.",
    hotspot_password_changed_fail_error: "í«ì¤í ë¹ë°ë²í¸ ë³ê²½ ì¤ ì¤ë¥ê° ë°ìíìµëë¤. ë¤ì ìëíì­ìì¤.",
    hotspot_password_change_note: "ì°¸ê³ : ë¹ë°ë²í¸ë¥¼ ë³ê²½íë©´ í«ì¤íì´ ìì§ íì±íëì§ ìì ê²½ì° íì±íëê³  ë¤ì ììëì´ íì¬ ì¬ì©ìì ì°ê²°ì´ ëì´ì§ëë¤.",
    password_strength_weak: "ì½í¨",
    password_strength_medium: "ì¤ê°",
    password_strength_strong: "ê°í¨",
    password_strength_very_strong: "ë§¤ì° ê°í¨",
    password_too_short_strength: "ëë¬´ ì§§ì",

    //ledanimations
    stop_animation: "ì ëë©ì´ì ì¤ì§",
    led_animation_on_idle: "ëê¸° ì¤ LED ì ëë©ì´ì",
    after_minutes: "ëª ë¶ í (0 - ì¬ì©ìí¨)",
    animation_type: "ì ëë©ì´ì ì í",

    //homepage
    advanced_mode: "ê³ ê¸ ëª¨ë",
    system_cpu_usage: "ìì¤í CPU ì¬ì©ë",
    ram_usage: "RAM ì¬ì©ë",
    disk_usage: "ëì¤í¬ ì¬ì©ë",
    bandwidth_usage: "ëì­í­ ì¬ì©ë",
    process_cpu_usage: "íë¡ì¸ì¤ CPU ì¬ì©ë",
    metronome: "ë©í¸ë¡ë",
    beats_per_measure: "ë°ìë¹ ë¹í¸ ì",
    volume: "ë³¼ë¥¨",
    color_mode: "ìì ëª¨ë",
    single: "ë¨ì¼",
    light_mode: "ì¡°ëª ëª¨ë",
    normal: "ì¼ë°",
    brightness: "ë°ê¸°",
    backlight_brightness: "ë°±ë¼ì´í¸ ë°ê¸°",
    input_port: "ìë ¥ í¬í¸",
    playback_port: "ì¬ì í¬í¸",
    cover_state: "ì»¤ë² ìí",
    screen: "íë©´",
    reset_settings_to_default: "ê¸°ë³¸ ì¤ì ì¼ë¡ ì´ê¸°í",
    confirm: "íì¸",
    restart_rpi: "RPi ì¬ìì",
    restart_visualizer: "ìê°í ëêµ¬ ì¬ìì",
    power_off: "ì ì ëê¸°",
    update_visualizer: "ìê°í ëêµ¬ ìë°ì´í¸",
    connect_ports: "í¬í¸ ì°ê²°",
    clean_led_strip: "LED ì¤í¸ë¦½ ì ë¦¬",
    logs: "ë¡ê·¸",
    show_last: "ë§ì§ë§ íì",
    lines: "ì¤",
    reinitialize_network_on_boot: "ë¶í ì ë¤í¸ìí¬ ì¬ì´ê¸°í",
    required_for_some_routers: "ì¼ë¶ ë¼ì°í°ì íìí©ëë¤. ì´ ìµìì ë¹íì±ííë©´ ìì ìëê° ë¹¨ë¼ì§ì§ë§ ì°ê²° ë¬¸ì ê° ë°ìí  ì ììµëë¤",

    //dynamic content
    incorrect_password: "ìëª»ë ë¹ë°ë²í¸ë¥¼ ìë ¥í ê²½ì° í«ì¤íì´ ë¤ì ì¤ì ëë ë° ëª ë¶ì´ ê±¸ë¦´ ì ììµëë¤.",
    if_the_hotspot: "5ë¶ íìë í«ì¤íì´ ëíëì§ ìì¼ë©´ ê¸°ê¸°ë¥¼ ì¬ììíì¸ì",
    connect: "ì°ê²°",

    
    session_summary: "ê²ì ìì½",
    right_hand_mistakes: "ì¤ë¥¸ì ì¤ì",
    right_hand_delay: "ê¸´ ë°ì ìê° - ì¤ë¥¸ì",
    left_hand_mistakes: "ì¼ì ì¤ì",
    left_hand_delay: "ê¸´ ë°ì ìê° - ì¼ì",
    right_hand_notes: "ì¤ë¥¸ì ìí",
    left_hand_notes: "ì¼ì ìí",
    right_hand_mistakes: "ì¤ë¥¸ì ì¤ë¥",
    left_hand_mistakes: "ì¼ì ì¤ë¥",
    note_timing_vs_delay: "ìí íì´ë° vs ì§ì°",
    chart_tooltip_label_delay: "ì§ì°",
    chart_tooltip_label_at_time: "ìì",
    mistakes: "íì´ë° ì¤ë¥",
    max_acceptaple_delay: "ìµë íì© ì§ì°",
    time: "MIDI ìê° (ì´)",
    delay: "ì§ì° (ì´)",
    reset_zoom: "ë¦¬ì",
    learning_status: "íìµ ìì",

    // Score and profiles
    score: "ì ì",
    combo: "ì½¤ë³´",
    multiplier: "ë°°ì",

    profile_label: "íë¡í",
    create_profile: "íë¡í ë§ë¤ê¸°",
    show_score: "ì ì íì",
    show_summary: "ìì½ íì",
    highscore: "ìµê³  ì ì",
    new_profile: "ì íë¡í",
        
},
he: {
    //index
    loading: "×××¢×",
    home: "×××ª",
    led_settings: "××××¨××ª ××",
    songs: "×©××¨××",
    sequences: "×¨×¦×¤××",
    ports_settings: "××××¨××ª ×¤××¨×××",
    led_animations: "×× ×××¦×××ª ××",
    wifi: "××××-×¤××",
    switch_ports: "××××£ ×¤××¨×××",
    view_on_github: "×¦×¤× ×-GitHub",
    join_discord: "××¦××¨×£ ×-Discord",

    //ledcolor
    led_color: "×¦××¢ ××",
    multicolor: "×¨× ×¦××¢××",
    rainbow_colors: "×¦××¢× ×§×©×ª",
    speed: "××××¨××ª",
    gradient: "××¨×××× ×",
    scale_coloring: "×¦×××¢×ª ×¡×××",
    velocity_rainbow: "×§×©×ª ××¤× ×¢××¦××",

    offset: "×××¡×",
    scale: "×¡×××",/////////////////////////
    timeshift: "×××¡× ×××",
    scale_percent: "×××× ×¡×××",
    curve_percent: "×××× ×¢×§×××",
    slow_color: "×¦××¢ ××××",
    fast_color: "×¦××¢ ××××¨",
    max_notes: "××§×¡×××× ×ª××××",
    period_in_seconds: "×ª×§××¤× ××©× ×××ª",
    start: "××ª×××",
    end: "×¡×××",
    color_for_in_scale: "×¦××¢ ××ª×××× ××¡×××",
    color_for_not_in_scale: "×¦××¢ ××ª×××× ××××¥ ××¡×××",
    scale_key: "××× ××¡×××",

    //lightmode
    fading: "×¢××¢××",
    velocity: "×¢××¦××",
    instant: "×××××",
    very_fast: "××××¨ ××××",
    fast: "××××¨",
    medium: "××× ×× ×",
    slow: "××××",
    very_slow: "×××× ××××",

    //ledsettings
    backlight: "×ª×××¨×ª ×¨×§×¢",
    sides_colors: "×¦××¢× ×¦××××",
    off: "××××",
    same_as_led_color: "××× ×¦××¢ ×××",
    rgb: "RGB",
    adjustments: "××ª××××ª",
    skipped_notes: "×ª×××× ×××××××",
    finger_based_ignore: "××ª×¢××××ª ××¤× ××¦××¢",
    normal_ignore_all_other: "×¨××× (××ª×¢×× ×××©××¨)",
    none: "×××",
    finger_based: "××××¡×¡ ××¦××¢",
    reverse: "×××¤××",
    inverted: "××¤××",
    shift: "××××",
    led_count: "××¡×¤×¨ ××××",
    leds_per_meter: "×××× ××××¨",
    led_note_offsets: "×××¡× ×ª××××",
    shift_notes_for_better_alignment: "××× ×ª×××× ××××©××¨ ××× ×××ª×¨",
    light_number_means: "×¤××¨××© ××¡×¤×¨ ×××¨",
    light_number: "××¡×¤×¨ ×××¨",
    note_offset: "×××¡× ×ª×",
    disable_backlight_on_idle: "××× ×ª×××¨×ª ×¨×§×¢ ×××¦× ×× ×××",

    //songs
    status: "××¦×",
    start_recording: "××ª×× ××§×××",
    starting: "××ª×××",
    stop_and_save: "×¢×¦××¨ ××©×××¨",
    cancel_recording: "××× ××§×××",
    canceling: "××××",
    upload_songs: "××¢×× ×©××¨××",
    drag_and_drop_midi: "××¨××¨ ××©××¨×¨ ×§×××¥ MIDI",
    or_click_to_choose: "×× ×××¥ ×××××¨×",
    play_on_piano: "× ×× ×¢× ××¤×¡× ×ª×¨",
    stop: "×¢×¦××¨",
    stop_learning: "×¢×¦××¨ ×××××",
    loop: "×××××",
    practice: "×ª×¨×××",
    melody: "×× ××× ×",
    rhythm: "×§×¦×",
    listen: "××××",
    tempo: "×§×¦×",
    hands: "×××××",
    both: "×©×ª×××",
    right: "××××",
    left: "×©×××",
    mute_hands: "××©×ª×§ ×××××",
    wrong_notes: "×ª×××× ×©×××××",
    disabled: "×××××",
    enabled: "×××¤×¢×",
    future_notes: "×ª×××× ×¢×ª×××××",
    start_point: "× ×§×××ª ××ª×××",
    set_the_current_track_time: "×§××¢ ××ª ×××× ×× ××××",
    end_point: "× ×§×××ª ×¡×××",
    set_the_current_track_time_as_the_loop_end: "×§××¢ ××ª ×××× ×× ×××× ××¡××× ××××××",
    left_hand_color: "×¦××¢ ×× ×©×××",
    right_hand_color: "×¦××¢ ×× ××××",
    songs_list: "×¨×©×××ª ×©××¨××",
    getting_songs_list: "×××¢× ×¨×©×××ª ×©××¨××",
    number_of_mistakes: "××¡×¤×¨ ××¢××××ª",

    //sheetmusic
    load_custom_sheet: "××¢× ×ª×××× ×××ª××××",
    offset_ms: "×××¡× (×××××©× ×××ª)",
    sheet_tip_line_1: "×××¤ ×ª×××× 1",
    sheet_tip_line_2: "×××¤ ×ª×××× 2",
    sheet_tip_line_3: "×××¤ ×ª×××× 3",
    sheet_tip_line_4: "×××¤ ×ª×××× 4",
    sheet_tip_line_5: "×××¤ ×ª×××× 5",

    //songslist
    name: "×©×",
    date: "×ª××¨××",
    action: "×¤×¢×××",
    songs_per_page: "×©××¨×× ××¢×××",
    total_songs: "×¡×\"× ×©××¨××",

    //sequences
    sequence: "×¨×¦×£",
    active_sequence: "×¨×¦×£ ×¤×¢××",
    color: "×¦××¢",
    next_step: "×©×× ×××",
    press_spacebar: "×××¥ ×¢× ××§×© ×¨×××",
    add: "×××¡×£",
    remove: "××¡×¨",
    step: "×©××",
    activation_method: "×©×××ª ××¤×¢××",
    button_press: "××××¦×ª ××¤×ª××¨",
    sustain_pedal: "××××©×ª ×¡×¡××××",
    portamento_pedal: "××××©×ª ×¤××¨××× ××",
    sostuneto_pedal: "××××©×ª ×¡××¡××× ××",
    soft_pedal: "××××©×ª ×¡××¤×",
    next_step_value: "×¢×¨× ×©×× ×××",
    next_step_tip_line_1: "×××¤ ×©×× ××× 1",
    next_step_tip_line_2: "×××¤ ×©×× ××× 2",
    next_step_tip_line_3: "×××¤ ×©×× ××× 3",
    next_step_tip_line_4: "×××¤ ×©×× ××× 4",
    sequence_name: "×©× ×¨×¦×£",
    save_current_settings_to_step: "×©×××¨ ××××¨××ª ××©××",

    //ports
    for_lighting_leds: "××ª×××¨×ª ××",
    set_your_synthesia: "××××¨ ××ª Synthesia ×©××",
    active: "×¤×¢××",
    switch: "××××£",
    secondary: "××©× ×",
    used_for_sound: "××©××××© ××¦×××",
    list_of_ports: "×¨×©×××ª ×¤××¨×××",
    disconnect_ports: "× ×ª×§ ×¤××¨×××",
    restart_rtp: "××¤×¢× ××××© RTP",
    midi_events: "×××¨××¢× MIDI",
    show_midi_events: "××¦× ×××¨××¢× MIDI",

    //network
    connected_wifi: "××××¨ ×-WiFi",
    disconnect_wifi_and_create_hotspot: "× ×ª×§ WiFi ×××¦×¨ × ×§×××ª ×××©×",
    disconnecting_warning_line_1: "×©××¨×ª ××××¨× × ××ª××§ 1",
    disconnecting_warning_line_2: "×©××¨×ª ××××¨× × ××ª××§ 2",
    wifi_list: "×¨×©×××ª ×¨×©×ª××ª",
    local_address: "××ª×××ª ××§××××ª",
    change_address: "×©× × ××ª×××ª",
    enter_local_address: "××× ××ª×××ª ××§××××ª",

    //ledanimations
    stop_animation: "×¢×¦××¨ ×× ×××¦××",
    led_animation_on_idle: "×× ×××¦×××ª ×× ×××¦× ×× ×××",
    after_minutes: "××××¨ ××§××ª",
    animation_type: "×¡×× ×× ×××¦××",

    //homepage
    advanced_mode: "××¦× ××ª×§××",
    system_cpu_usage: "×©××××© ×××¢××",
    ram_usage: "×©××××© ×××××¨××",
    disk_usage: "×©××××© ××××¡×§",
    bandwidth_usage: "×©××××© ××¨××× ×¤×¡",
    process_cpu_usage: "×©××××© ×××¢×× ×©× ××ª××××",
    metronome: "×××¨×× ××",
    beats_per_measure: "×¤×¢××××ª ×××××",
    volume: "×¢××¦××ª ×©××¢",
    color_mode: "××¦× ×¦××¢",
    single: "××××",
    light_mode: "××¦× ×ª×××¨×",
    normal: "×¨×××",
    brightness: "××××¨××ª",
    backlight_brightness: "××××¨××ª ×ª×××¨×ª ×¨×§×¢",
    input_port: "×¤××¨× ×§××",
    playback_port: "×¤××¨× × ××× ×",
    cover_state: "××¦× ×××¡××",
    screen: "××¡×",
    reset_settings_to_default: "×××¤××¡ ××××¨××ª ×××¨××¨×ª ××××",
    confirm: "×××©××¨",
    restart_rpi: "××¤×¢× ××××© ××ª RPi",
    restart_visualizer: "××¤×¢× ××××© ×××××××××¦××",
    power_off: "×××××",
    update_visualizer: "×¢××× ×××××××××¦××",
    connect_ports: "×××¨ ×¤××¨×××",
    clean_led_strip: "× ×§× ×¨×¦××¢×ª ××",
    logs: "×××××",
    show_last: "××¦× ×××¨××",
    lines: "×©××¨××ª",
    reinitialize_network_on_boot: "××ª××× ×¨×©×ª ×××¤×¢××",
    required_for_some_routers: "× ××¨×© ××××§ ×××¨××××¨××",

    //dynamic content
    incorrect_password: "×¡××¡×× ×©××××",
    if_the_hotspot: "×× × ×§×××ª ××××©×",
    connect: "××ª×××¨",

    
    //Summary
    session_summary: "×¡×××× ×××¦××¢",
    right_hand_mistakes: "××¢××××ª ×× ××××",
    right_hand_delay: "××× ×ª×××× ××¨×× - ×× ××××",
    left_hand_mistakes: "××¢××××ª ×× ×©×××",
    left_hand_delay: "××× ×ª×××× ××¨×× - ×× ×©×××",
    right_hand_notes: "×ª×××× ××× ××××",
    left_hand_notes: "×ª×××× ××× ×©×××",
    right_hand_mistakes: "×©×××××ª ××× ××××",
    left_hand_mistakes: "×©×××××ª ××× ×©×××",
    note_timing_vs_delay: "×ª×××× ×ª×××× ××¢×××ª ××©××××",
    chart_tooltip_label_delay: "×©××××",
    chart_tooltip_label_at_time: "×-",
    mistakes: "×©×××× ××××",
    max_acceptaple_delay: "×©×××× ××§×¡×××××ª ×××ª×¨×ª",
    time: "(×©× ×××ª) MIDI ×××",
    delay: "×©×××× (×©× ×××ª)",
    reset_zoom:"×××¤××¡",
    learning_status: "××ª×× ×××××",

    // Score and profiles
    score: "× ××§××",
    combo: "×¨×¦×£",
    multiplier: "×××¤××",

    profile_label: "×¤×¨××¤××",
    create_profile: "×¦××¨ ×¤×¨××¤××",
    show_score: "××¦× × ××§××",
    show_summary: "××¦× ×¡××××",
    highscore: "×©××",
    new_profile: "×¤×¨××¤×× ×××©",
    
},
ar:{
    //index
    loading: "Ø¬Ø§Ø±Ù Ø§ÙØªØ­ÙÙÙ...",
    home: "Ø§ÙØ±Ø¦ÙØ³ÙØ©",
    led_settings: "Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§ÙÙÙØ¯",
    songs: "Ø§ÙØ£ØºØ§ÙÙ",
    sequences: "Ø§ÙØªØªØ§Ø¨Ø¹Ø§Øª",
    ports_settings: "Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§ÙÙÙØ§ÙØ°",
    led_animations: "Ø­Ø±ÙØ§Øª Ø§ÙÙÙØ¯",
    wifi: "ÙØ§Ù ÙØ§Ù",
    switch_ports: "ØªØ¨Ø¯ÙÙ Ø§ÙÙÙØ§ÙØ°",
    view_on_github: "Ø´ÙÙ Ø¹ÙÙ GitHub",
    join_discord: "Ø§ÙØ¶Ù ÙØ³ÙØ±ÙØ± Discord",

    // ledcolor
    led_color: "ÙÙÙ Ø§ÙÙÙØ¯",
    multicolor: "Ø£ÙÙØ§Ù ÙØªØ¹Ø¯Ø¯Ø©",
    rainbow_colors: "Ø£ÙÙØ§Ù ÙÙØ³ ÙØ²Ø­",
    speed: "Ø§ÙØ³Ø±Ø¹Ø©",
    gradient: "ØªØ¯Ø±Ø¬",
    scale_coloring: "ØªÙÙÙÙ Ø§ÙØ³ÙÙ",
    velocity_rainbow: "Ø³Ø±Ø¹Ø© ÙÙØ³ ÙØ²Ø­",

    offset: "Ø¥Ø²Ø§Ø­Ø©",
    scale: "Ø§ÙØ³ÙÙ",
    timeshift: "ØªØ­ÙÙÙ Ø²ÙÙÙ",
    scale_percent: "ÙØ³Ø¨Ø© Ø§ÙØ³ÙÙ %",
    curve_percent: "ÙØ³Ø¨Ø© Ø§ÙØ§ÙØ­ÙØ§Ø¡ %",
    slow_color: "ÙÙÙ Ø¨Ø·ÙØ¡",
    fast_color: "ÙÙÙ Ø³Ø±ÙØ¹",
    max_notes: "Ø£ÙØµÙ Ø¹Ø¯Ø¯ ÙØºÙØ§Øª",
    period_in_seconds: "Ø§ÙÙØ¯Ø© Ø¨Ø§ÙØ«ÙØ§ÙÙ",
    start: "Ø§ÙØ¨Ø¯Ø§ÙØ©",
    end: "Ø§ÙÙÙØ§ÙØ©",
    color_for_in_scale: "ÙÙÙ ÙÙÙØºÙØ§Øª Ø¯Ø§Ø®Ù Ø§ÙØ³ÙÙ",
    color_for_not_in_scale: "ÙÙÙ ÙÙÙØºÙØ§Øª Ø®Ø§Ø±Ø¬ Ø§ÙØ³ÙÙ",
    scale_key: "ÙÙØªØ§Ø­ Ø§ÙØ³ÙÙ",

    // lightmode
    fading: "ØªÙØ§Ø´Ù",
    velocity: "Ø§ÙØ³Ø±Ø¹Ø©",
    instant: "ÙÙØ±Ù",
    very_fast: "Ø³Ø±ÙØ¹ Ø¬Ø¯Ø§Ù",
    fast: "Ø³Ø±ÙØ¹",
    medium: "ÙØªÙØ³Ø·",
    slow: "Ø¨Ø·ÙØ¡",
    very_slow: "Ø¨Ø·ÙØ¡ Ø¬Ø¯Ø§Ù",

    // ledsettings
    backlight: "Ø¥Ø¶Ø§Ø¡Ø© Ø®ÙÙÙØ©",
    sides_colors: "Ø£ÙÙØ§Ù Ø§ÙØ¬ÙØ§ÙØ¨",
    off: "Ø¥ÙÙØ§Ù",
    same_as_led_color: "ÙÙØ³ ÙÙÙ Ø§ÙÙÙØ¯",
    rgb: "RGB",
    adjustments: "ØªØ¹Ø¯ÙÙØ§Øª",
    skipped_notes: "ÙØºÙØ§Øª ÙØªØ®Ø·ÙØ©",
    finger_based_ignore: "Ø­Ø³Ø¨ Ø§ÙØ¥ØµØ¨Ø¹: ØªØ¬Ø§ÙÙ Ø§ÙÙØºÙØ§Øª Ø§ÙÙÙ ÙÙÙØ§ ÙØ¹ÙÙÙØ§Øª Ø¹Ù Ø§ÙÙØ¯",
    normal_ignore_all_other: "Ø¹Ø§Ø¯Ù: ØªØ¬Ø§ÙÙ Ø¨Ø§ÙÙ Ø§ÙÙØºÙØ§Øª",
    none: "ÙØ§ Ø´ÙØ¡",
    finger_based: "Ø­Ø³Ø¨ Ø§ÙØ¥ØµØ¨Ø¹",
    reverse: "Ø¹ÙØ³Ù",
    inverted: "ÙÙÙÙØ¨",
    shift: "ØªØ­ÙÙÙ",
    led_count: "Ø¹Ø¯Ø¯ Ø§ÙÙÙØ¯Ø§Øª",
    leds_per_meter: "ÙÙØ¯Ø§Øª ÙÙÙ ÙØªØ±",
    led_note_offsets: "Ø¥Ø²Ø§Ø­Ø§Øª ÙØºÙØ§Øª Ø§ÙÙÙØ¯",
    shift_notes_for_better_alignment: "Ø¶Ø¨Ø· Ø£ÙØ§ÙÙ Ø§ÙÙÙØ¯ ÙÙØ²Ø§ÙÙØ© Ø£ÙØ¶Ù",
    light_number_means: "Ø±ÙÙ Ø§ÙÙØºÙØ©: 72Ø Ø§ÙØ¥Ø²Ø§Ø­Ø©: 2: ÙÙÙØºÙØ§Øª ÙÙÙ 72Ø Ø§ÙÙÙØ¯Ø§Øª ØªØªØ­Ø±Ù Ø®Ø·ÙØªÙÙ ÙÙØ®ÙÙ",
    light_number: "Ø±ÙÙ Ø§ÙÙØºÙØ©",
    note_offset: "Ø¥Ø²Ø§Ø­Ø© Ø§ÙÙØºÙØ©",
    disable_backlight_on_idle: "Ø¥ÙÙØ§Ù Ø§ÙØ¥Ø¶Ø§Ø¡Ø© Ø§ÙØ®ÙÙÙØ© ÙÙØª Ø§ÙØ®ÙÙÙ",

    // songs
    status: "Ø§ÙØ­Ø§ÙØ©",
    start_recording: "Ø§Ø¨Ø¯Ø£ ØªØ³Ø¬ÙÙ",
    starting: "Ø¬Ø§Ø±Ù Ø§ÙØ¨Ø¯Ø¡",
    stop_and_save: "Ø¥ÙÙØ§Ù ÙØ­ÙØ¸",
    cancel_recording: "Ø¥ÙØºØ§Ø¡ Ø§ÙØªØ³Ø¬ÙÙ",
    canceling: "Ø¬Ø§Ø±Ù Ø§ÙØ¥ÙØºØ§Ø¡",
    upload_songs: "Ø±ÙØ¹ Ø§ÙØ£ØºØ§ÙÙ",
    drag_and_drop_midi: "Ø§Ø³Ø­Ø¨ ÙØ£Ø³ÙØ· ÙÙÙØ§Øª MIDI ÙÙØ§",
    or_click_to_choose: "Ø£Ù Ø§Ø¶ØºØ· ÙØ§Ø®ØªÙØ§Ø± ÙÙÙØ§Øª ÙÙØ±ÙØ¹",
    play_on_piano: "Ø§Ø¹Ø²Ù Ø¹ÙÙ Ø§ÙØ¨ÙØ§ÙÙ",
    stop: "Ø¥ÙÙØ§Ù",
    learning_status: "Ø§Ø¨Ø¯Ø£ Ø§ÙØªØ¹ÙÙ",
    stop_learning: "Ø£ÙÙÙ Ø§ÙØªØ¹ÙÙ",
    loop: "ØªÙØ±Ø§Ø±",
    practice: "ØªØ¯Ø±ÙØ¨",
    melody: "ÙØ­Ù",
    rhythm: "Ø¥ÙÙØ§Ø¹",
    listen: "Ø§Ø³ØªÙØ¹",
    tempo: "Ø§ÙØ³Ø±Ø¹Ø©",
    hands: "Ø§ÙØ£ÙØ§Ø¯Ù",
    both: "Ø§ÙØ§ØªÙÙÙ",
    right: "Ø§ÙÙÙÙÙ",
    left: "Ø§ÙØ´ÙØ§Ù",
    mute_hands: "ÙØªÙ Ø§ÙØ£ÙØ§Ø¯Ù",
    wrong_notes: "ÙØºÙØ§Øª ØºÙØ·",
    disabled: "ÙÙÙÙÙ",
    enabled: "ÙÙØªÙØ­",
    future_notes: "ÙØºÙØ§Øª ÙØ§Ø¯ÙØ©",
    start_point: "ÙÙØ·Ø© Ø§ÙØ¨Ø¯Ø§ÙØ©",
    set_the_current_track_time: "Ø­Ø¯Ø¯ ÙÙØª Ø§ÙØªØ±Ø§Ù Ø§ÙØ­Ø§ÙÙ ÙÙÙØ·Ø© Ø¨Ø¯Ø§ÙØ© Ø§ÙØªÙØ±Ø§Ø±",
    end_point: "ÙÙØ·Ø© Ø§ÙÙÙØ§ÙØ©",
    set_the_current_track_time_as_the_loop_end: "Ø­Ø¯Ø¯ ÙÙØª Ø§ÙØªØ±Ø§Ù Ø§ÙØ­Ø§ÙÙ ÙÙÙØ·Ø© ÙÙØ§ÙØ© Ø§ÙØªÙØ±Ø§Ø±",
    left_hand_color: "ÙÙÙ Ø§ÙÙØ¯ Ø§ÙØ´ÙØ§Ù",
    right_hand_color: "ÙÙÙ Ø§ÙÙØ¯ Ø§ÙÙÙÙÙ",
    songs_list: "ÙØ§Ø¦ÙØ© Ø§ÙØ£ØºØ§ÙÙ",
    getting_songs_list: "Ø¬Ø§Ø±Ù ØªØ­ÙÙÙ ÙØ§Ø¦ÙØ© Ø§ÙØ£ØºØ§ÙÙ",
    number_of_mistakes: "Ø¹Ø¯Ø¯ Ø§ÙØ£Ø®Ø·Ø§Ø¡ ÙØ¥Ø¹Ø§Ø¯Ø© Ø§ÙØªÙØ±Ø§Ø± (0 = Ø£Ø¨Ø¯Ø§Ù)",

    // sheetmusic
    load_custom_sheet: "ØªØ­ÙÙÙ ÙÙØªØ© ÙØ®ØµØµØ©",
    offset_ms: "Ø¥Ø²Ø§Ø­Ø© (ÙÙÙÙ Ø«Ø§ÙÙØ©)",
    sheet_tip_line_1: "ÙÙ Ø§ÙØªØ­ÙÙÙ Ø§ÙØªÙÙØ§Ø¦Ù ÙØ´ ÙÙØ§Ø³Ø¨Ø ÙÙÙÙ ØªØ­ÙÙ Ø§ÙÙÙØªØ© Ø§ÙÙÙØ³ÙÙÙØ© Ø¨ØªØ§Ø¹ØªÙ.",
    sheet_tip_line_2: "Ø§ÙØ¬Ø²Ø¡ Ø§ÙÙØ¸ÙÙ ÙÙ ÙØ¤Ø´Ø± ØªÙØ±ÙØ¨Ù. Ø§Ø³ØªØ®Ø¯Ù Ø£Ø¯Ø§Ø© Ø§ÙØ¥Ø²Ø§Ø­Ø© ÙØªØ­Ø³ÙÙ Ø§ÙØªØ²Ø§ÙÙ.",
    sheet_tip_line_3: "ÙØ£ÙØ¶Ù ÙØªÙØ¬Ø©Ø Ø§Ø¹ÙÙ Ø§ÙØ¢ØªÙ:",
    sheet_tip_line_4: "1. Ø­ÙÙÙ Ø§ÙÙÙØªØ© Ø§ÙÙÙØ³ÙÙÙØ© ÙÙÙÙ MIDI Ø¨Ø§Ø³ØªØ®Ø¯Ø§Ù Musescore Ø£Ù Ø¨Ø±ÙØ§ÙØ¬ ÙØ´Ø§Ø¨ÙØ ÙØ³ÙÙÙ ÙÙØ³ Ø§Ø³Ù ÙÙÙ Ø§ÙÙ MIDI Ø§ÙÙÙ ÙØªØ­ÙÙÙ. (ÙØ«ÙØ§Ù: my_music.mid Ù my_music.xml)",
    sheet_tip_line_5: "2. Ø§Ø±ÙØ¹ ÙÙÙ Ø§ÙÙ MIDI ÙÙÙÙ Ø§ÙÙÙØªØ© Ø§ÙÙÙØ³ÙÙÙØ©.",

    // songslist
    name: "Ø§ÙØ§Ø³Ù",
    date: "Ø§ÙØªØ§Ø±ÙØ®",
    action: "Ø§ÙØ¥Ø¬Ø±Ø§Ø¡",
    songs_per_page: "Ø£ØºØ§ÙÙ ÙÙÙ ØµÙØ­Ø©",
    total_songs: "Ø¹Ø¯Ø¯ Ø§ÙØ£ØºØ§ÙÙ: ",

    // sequences
    sequence: "ØªØªØ§Ø¨Ø¹",
    active_sequence: "Ø§ÙØªØªØ§Ø¨Ø¹ Ø§ÙÙØ´Ø·",
    color: "Ø§ÙÙÙÙ",
    next_step: "Ø§ÙØ®Ø·ÙØ© Ø§ÙØ¬Ø§ÙØ©",
    press_spacebar: "Ø§Ø¶ØºØ· Ø§ÙÙØ³Ø·Ø±Ø©",
    add: "Ø¥Ø¶Ø§ÙØ©",
    remove: "Ø¥Ø²Ø§ÙØ©",
    step: "Ø®Ø·ÙØ©",
    activation_method: "Ø·Ø±ÙÙØ© Ø§ÙØªÙØ¹ÙÙ",
    button_press: "Ø¶ØºØ·Ø© Ø²Ø±",
    sustain_pedal: "Ø¨Ø¯ÙØ§Ù Ø§ÙØ³Ø³ØªÙÙ",
    portamento_pedal: "Ø¨Ø¯ÙØ§Ù Ø¨ÙØ±ØªØ§ÙÙÙØªÙ",
    sostuneto_pedal: "Ø¨Ø¯ÙØ§Ù Ø³ÙØ³ØªÙÙÙØªÙ",
    soft_pedal: "Ø¨Ø¯ÙØ§Ù ÙØ§Ø¹Ù",
    next_step_value: "ÙÙÙØ© Ø§ÙØ®Ø·ÙØ© Ø§ÙØ¬Ø§ÙØ©",
    next_step_tip_line_1: "Ø§ÙÙÙÙØ© Ø¯Ù Ø¨ØªØ­Ø¯Ø¯ ÙÙ Ø§ÙØ®Ø·ÙØ© Ø§ÙØ¬Ø§ÙØ© ÙØªØ´ØªØºÙ Ø¹ÙØ¯ Ø§ÙØ¶ØºØ· Ø£Ù Ø§ÙØ¥ÙÙØ§Øª.",
    next_step_tip_line_2: "ÙØ«ÙØ§Ù ÙÙ Ø¹Ø§ÙØ² Ø§ÙØªØºÙÙØ± ÙØ­ØµÙ Ø¨Ø¹Ø¯ ÙØ§ ØªØ¯ÙØ³ Ø¨Ø¯ÙØ§Ù Ø§ÙØ³ÙØ³ØªÙÙÙØªÙ ÙÙØ¢Ø®Ø±Ø Ø­Ø· Ø§ÙÙÙÙØ© 126",
    next_step_tip_line_3: "(127 ÙÙ Ø£ÙØµÙ ÙÙÙØ© ÙÙØ§ Ø§ÙØ¨Ø¯ÙØ§Ù ÙÙÙÙ ÙØ¶ØºÙØ· ÙÙØ¢Ø®Ø±).",
    next_step_tip_line_4: "Ø­Ø· Ø§ÙÙÙÙØ© -1 ÙÙ Ø¹Ø§ÙØ² Ø§ÙØªØºÙÙØ± ÙØªÙ Ø¨Ø¹Ø¯ ÙØ§ ØªØ±ÙØ¹ Ø±Ø¬ÙÙ ÙÙ Ø¹ÙÙ Ø§ÙØ¨Ø¯ÙØ§Ù.",
    sequence_name: "Ø§Ø³Ù Ø§ÙØªØªØ§Ø¨Ø¹",
    save_current_settings_to_step: "Ø§Ø­ÙØ¸ Ø§ÙØ¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§ÙØ­Ø§ÙÙØ© ÙÙØ®Ø·ÙØ©",

    // ports
    for_lighting_leds: "Ø¹Ø´Ø§Ù ØªÙÙØ± Ø§ÙÙÙØ¯Ø§Øª ÙÙ Ø§ÙÙÙØ¨ÙØ±Ø¯Ø Ø®ÙÙ ÙÙÙØ° Ø§ÙØ¨ÙØ§ÙÙ ÙØ´Ø·.",
    set_your_synthesia: "Ø­Ø¯Ø¯ ÙÙÙØ° Synthesia ÙÙØ¶Ø¹ Ø§ÙØªØ¹ÙÙ.",
    active: "ÙØ´Ø·",
    switch: "ØªØ¨Ø¯ÙÙ",
    secondary: "Ø«Ø§ÙÙÙ",
    used_for_sound: "ÙÙØ³ØªØ®Ø¯Ù ÙÙØµÙØª Ø£Ø«ÙØ§Ø¡ ØªØ´ØºÙÙ ÙÙÙØ§Øª MIDI.",
    list_of_ports: "ÙØ§Ø¦ÙØ© Ø§ÙÙÙØ§ÙØ° ÙØ§ÙØ§ØªØµØ§ÙØ§Øª",
    disconnect_ports: "Ø§ÙØµÙ Ø§ÙÙÙØ§ÙØ°",
    restart_rtp: "Ø¥Ø¹Ø§Ø¯Ø© ØªØ´ØºÙÙ Ø®Ø¯ÙØ© RTP MIDI",
    midi_events: "Ø£Ø­Ø¯Ø§Ø« MIDI",
    show_midi_events: "Ø¹Ø±Ø¶ Ø£Ø­Ø¯Ø§Ø« MIDI (ÙÙÙÙ ÙØ¨Ø·Ø£ Ø§ÙØ£Ø¯Ø§Ø¡)",

    // network
    connected_wifi: "ÙØªØµÙ Ø¨Ø§ÙÙØ§Ù ÙØ§Ù",
    disconnect_wifi_and_create_hotspot: "Ø§ÙØµÙ Ø§ÙÙØ§Ù ÙØ§Ù ÙØ£ÙØ´Ø¦ ÙÙØ·Ø© Ø§ØªØµØ§Ù",
    disconnecting_warning_line_1: "ÙØµÙ Ø§ÙÙØ§Ù ÙØ§Ù ÙÙØ¨Ø¯Ø£ Ø¹ÙÙÙØ© Ø¥ÙØ´Ø§Ø¡ ÙÙØ·Ø© Ø§ØªØµØ§Ù. Ø¯Ù ÙÙÙÙ ÙØ§Ø®Ø¯ Ø´ÙÙØ© ÙÙØª.",
    disconnecting_warning_line_2: "ÙØªØ­ØªØ§Ø¬ ØªØªØµÙ Ø¨Ø§ÙÙÙØ·Ø© Ø§ÙØ¬Ø¯ÙØ¯Ø© Ø¹Ø´Ø§Ù ØªÙØµÙ ÙÙÙØ§Ø¬ÙØ© ÙÙ ØªØ§ÙÙ.",
    wifi_list: "ÙØ§Ø¦ÙØ© Ø§ÙØ´Ø¨ÙØ§Øª",
    local_address: "Ø§ÙØ¹ÙÙØ§Ù Ø§ÙÙØ­ÙÙ",
    change_address: "ØªØºÙÙØ± Ø§ÙØ¹ÙÙØ§Ù",
    enter_local_address: "Ø§ÙØªØ¨ Ø§ÙØ¹ÙÙØ§Ù Ø§ÙØ¬Ø¯ÙØ¯",

    // ledanimations
    stop_animation: "Ø¥ÙÙØ§Ù Ø§ÙØ­Ø±ÙØ©",
    led_animation_on_idle: "Ø­Ø±ÙØ© Ø§ÙÙÙØ¯ ÙÙØª Ø§ÙØ®ÙÙÙ",
    after_minutes: "Ø¨Ø¹Ø¯ ÙØ§Ù Ø¯ÙÙÙØ© (0 = Ø£Ø¨Ø¯Ø§Ù)",
    animation_type: "ÙÙØ¹ Ø§ÙØ­Ø±ÙØ©",

    // homepage
    advanced_mode: "Ø§ÙÙØ¶Ø¹ Ø§ÙÙØªÙØ¯Ù",
    system_cpu_usage: "Ø§Ø³ØªÙÙØ§Ù Ø§ÙÙØ¹Ø§ÙØ¬",
    ram_usage: "Ø§Ø³ØªÙÙØ§Ù Ø§ÙØ±Ø§Ù",
    disk_usage: "Ø§Ø³ØªÙÙØ§Ù Ø§ÙÙØ§Ø±Ø¯",
    bandwidth_usage: "Ø§Ø³ØªÙÙØ§Ù Ø§ÙØ¥ÙØªØ±ÙØª",
    process_cpu_usage: "Ø§Ø³ØªÙÙØ§Ù Ø§ÙÙØ¹Ø§ÙØ¬ ÙÙØ¹ÙÙÙØ©",
    metronome: "Ø§ÙÙÙØªØ±ÙÙÙÙ",
    beats_per_measure: "Ø¹Ø¯Ø¯ Ø§ÙÙØ¨Ø¶Ø§Øª ÙÙ Ø§ÙÙØ­Ø¯Ø©",
    volume: "Ø§ÙØµÙØª",
    color_mode: "ÙØ¶Ø¹ Ø§ÙØ£ÙÙØ§Ù",
    single: "ÙÙÙ ÙØ§Ø­Ø¯",
    light_mode: "ÙØ¶Ø¹ Ø§ÙØ¥Ø¶Ø§Ø¡Ø©",
    normal: "Ø¹Ø§Ø¯Ù",
    brightness: "Ø§ÙØ³Ø·ÙØ¹",
    backlight_brightness: "Ø³Ø·ÙØ¹ Ø§ÙØ¥Ø¶Ø§Ø¡Ø© Ø§ÙØ®ÙÙÙØ©",
    input_port: "ÙÙÙØ° Ø§ÙØ¥Ø¯Ø®Ø§Ù",
    playback_port: "ÙÙÙØ° Ø§ÙØªØ´ØºÙÙ",
    cover_state: "Ø­Ø§ÙØ© Ø§ÙØºØ·Ø§Ø¡",
    screen: "Ø§ÙØ´Ø§Ø´Ø©",
    reset_settings_to_default: "Ø¥Ø±Ø¬Ø§Ø¹ Ø§ÙØ¥Ø¹Ø¯Ø§Ø¯Ø§Øª ÙÙÙØ¶Ø¹ Ø§ÙØ¥ÙØªØ±Ø§Ø¶Ù",
    confirm: "ØªØ£ÙÙØ¯",
    restart_rpi: "Ø¥Ø¹Ø§Ø¯Ø© ØªØ´ØºÙÙ RPi",
    restart_visualizer: "Ø¥Ø¹Ø§Ø¯Ø© ØªØ´ØºÙÙ Ø§ÙØ¹Ø§Ø±Ø¶",
    power_off: "Ø¥ÙÙØ§Ù Ø§ÙØªØ´ØºÙÙ",
    update_visualizer: "ØªØ­Ø¯ÙØ« Ø§ÙØ¹Ø§Ø±Ø¶",
    connect_ports: "ØªÙØµÙÙ Ø§ÙÙÙØ§ÙØ°",
    clean_led_strip: "ØªÙØ¸ÙÙ Ø´Ø±ÙØ· Ø§ÙÙÙØ¯",
    logs: "Ø§ÙØ³Ø¬ÙØ§Øª",
    show_last: "Ø¹Ø±Ø¶ Ø¢Ø®Ø±",
    lines: "Ø£Ø³Ø·Ø±",
    reinitialize_network_on_boot: "Ø¥Ø¹Ø§Ø¯Ø© ØªÙÙØ¦Ø© Ø§ÙØ´Ø¨ÙØ© Ø¹ÙØ¯ Ø§ÙØªØ´ØºÙÙ",
    required_for_some_routers: "ÙØ·ÙÙØ¨ ÙØ¨Ø¹Ø¶ Ø§ÙØ±Ø§ÙØªØ±Ø§Øª. Ø¥ÙØºØ§Ø¡ Ø§ÙØªÙØ¹ÙÙ ÙÙØ³Ø±ÙØ¹ Ø§ÙØªØ´ØºÙÙ Ø¨Ø³ ÙÙÙÙ ÙØ³Ø¨Ø¨ ÙØ´Ø§ÙÙ Ø§ØªØµØ§Ù",

    // dynamic content
    incorrect_password: "ÙÙ ÙØªØ¨Øª ÙÙÙØ© Ø³Ø± ØºÙØ·Ø ÙÙÙÙ ÙÙØ·Ø© Ø§ÙØ§ØªØµØ§Ù ØªØ³ØªØºØ±Ù ÙÙØª Ø¹Ø´Ø§Ù ØªØ´ØªØºÙ ØªØ§ÙÙ.",
    if_the_hotspot: "ÙÙ ÙÙØ·Ø© Ø§ÙØ§ØªØµØ§Ù ÙØ§ Ø¸ÙØ±ØªØ´ Ø¨Ø¹Ø¯ Ù¥ Ø¯ÙØ§ÙÙØ Ø¨Ø±Ø¬Ø§Ø¡ Ø¥Ø¹Ø§Ø¯Ø© ØªØ´ØºÙÙ Ø§ÙØ¬ÙØ§Ø²",
    connect: "Ø§ØªØµÙ",
    session_summary: "ÙÙØ®Øµ Ø§ÙØ¬ÙØ³Ø©",
    right_hand_mistakes: "Ø£Ø®Ø·Ø§Ø¡ Ø§ÙÙØ¯ Ø§ÙÙÙÙÙ",
    right_hand_delay: "ÙÙØª Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø·ÙÙÙ - Ø§ÙÙØ¯ Ø§ÙÙÙÙÙ",
    left_hand_mistakes: "Ø£Ø®Ø·Ø§Ø¡ Ø§ÙÙØ¯ Ø§ÙØ´ÙØ§Ù",
    left_hand_delay: "ÙÙØª Ø§Ø³ØªØ¬Ø§Ø¨Ø© Ø·ÙÙÙ - Ø§ÙÙØ¯ Ø§ÙÙØ³Ø±Ù",
    right_hand_notes: "ÙØºÙØ§Øª Ø§ÙÙØ¯ Ø§ÙÙÙÙÙ",
    left_hand_notes: "ÙØºÙØ§Øª Ø§ÙÙØ¯ Ø§ÙØ´ÙØ§Ù",
    note_timing_vs_delay: "ØªÙÙÙØª Ø§ÙÙØºÙØ§Øª ÙÙØ§Ø¨Ù Ø§ÙØªØ£Ø®ÙØ±",
    chart_tooltip_label_delay: "Ø§ÙØªØ£Ø®ÙØ±",
    chart_tooltip_label_at_time: "ÙÙ Ø§ÙÙÙØª",
    mistakes: "Ø£Ø®Ø·Ø§Ø¡ ØªÙÙÙØª",
    max_acceptaple_delay: "Ø£ÙØµÙ ØªØ£Ø®ÙØ± ÙØ³ÙÙØ­",
    time: "Ø²ÙÙ MIDI (Ø¨Ø§ÙØ«ÙØ§ÙÙ)",
    delay: "Ø§ÙØªØ£Ø®ÙØ± (Ø¨Ø§ÙØ«ÙØ§ÙÙ)",
    reset_zoom: "Ø¥Ø¹Ø§Ø¯Ø© Ø§ÙØ¶Ø¨Ø·",
    learning_status: "Ø§Ø¨Ø¯Ø£ Ø§ÙØªØ¹ÙÙ",

    // score and profiles
    score: "Ø§ÙÙØªÙØ¬Ø©",
    combo: "Ø³ÙØ³ÙØ©",
    multiplier: "ÙØ¶Ø§Ø¹Ù",

    profile_label: "Ø§ÙÙÙÙ Ø§ÙØ´Ø®ØµÙ",
    create_profile: "Ø¥ÙØ´Ø§Ø¡ ÙÙÙ Ø´Ø®ØµÙ",
    show_score: "Ø¹Ø±Ø¶ Ø§ÙÙØªÙØ¬Ø©",
    show_summary: "Ø¹Ø±Ø¶ Ø§ÙÙÙØ®Øµ",
    highscore: "Ø£Ø¹ÙÙ ÙØªÙØ¬Ø©",
    new_profile: "ÙÙÙ Ø´Ø®ØµÙ Ø¬Ø¯ÙØ¯"
},
};
