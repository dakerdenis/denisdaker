<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MainPage;

Route::get('/', [MainPage::class, 'index']);
